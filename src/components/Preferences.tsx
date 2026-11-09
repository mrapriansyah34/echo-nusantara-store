import { Moon, Sun } from 'lucide-react'

import { cx } from '../lib/cx'
import { useLocale } from '../lib/i18n'
import { useTheme } from '../lib/theme'

// Theme and language switches. Both persist in localStorage, so a returning
// visitor keeps their choice (and index.html applies it before first paint).
export function Preferences({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const { locale, setLocale } = useLocale()
  const id = locale === 'id'

  return (
    <div className={cx('flex items-center gap-1.5', className)}>
      <button
        type="button"
        onClick={(event) => toggle({ x: event.clientX, y: event.clientY })}
        aria-label={id ? 'Ganti tema terang atau gelap' : 'Toggle light or dark theme'}
        aria-pressed={theme === 'dark'}
        className="grid size-9 place-items-center rounded-full border border-hair text-ink transition-colors hover:border-ink"
      >
        {theme === 'dark' ? (
          <Sun className="size-4" strokeWidth={1.5} />
        ) : (
          <Moon className="size-4" strokeWidth={1.5} />
        )}
      </button>
      <button
        type="button"
        onClick={() => setLocale(id ? 'en' : 'id')}
        aria-label={id ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        className="grid h-9 min-w-9 place-items-center rounded-full border border-hair px-2 text-[11.5px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
      >
        {id ? 'EN' : 'ID'}
      </button>
    </div>
  )
}
