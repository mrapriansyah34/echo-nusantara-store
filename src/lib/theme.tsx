import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'echo-theme'
const ThemeContext = createContext<{ theme: Theme; toggle: (origin?: { x: number; y: number }) => void } | null>(null)

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> }
}

function storedTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'dark' || value === 'light' ? value : null
}

function prefersDark() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function apply(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => storedTheme() ?? (prefersDark() ? 'dark' : 'light'))

  useEffect(() => {
    apply(theme)
  }, [theme])

  // Switches theme as a circular wipe growing from the toggle button. Browsers
  // without the View Transitions API just swap instantly.
  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)

      const commit = () => setTheme(next)
      const doc = document as ViewTransitionDocument
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!doc.startViewTransition || reduced) {
        commit()
        return
      }

      const x = origin?.x ?? window.innerWidth - 48
      const y = origin?.y ?? 48
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
      const transition = doc.startViewTransition(() => flushSync(commit))

      transition.ready
        .then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            {
              duration: 620,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-new(root)',
            },
          )
        })
        .catch(() => {})
    },
    [theme],
  )

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme must be used inside ThemeProvider')
  return value
}
