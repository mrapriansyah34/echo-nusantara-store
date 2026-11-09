import { useState } from 'react'

import type { ProductKind, ProductTone } from '../content'
import { cx } from '../lib/cx'

const tones: Record<ProductTone, { bg: string; liquid: string; deep: string; glow: string }> = {
  gold: { bg: '#efe4d1', liquid: '#cfac6b', deep: '#8a6a2f', glow: '#f7ecd8' },
  sage: { bg: '#e7ebdc', liquid: '#d4d29b', deep: '#b0a765', glow: '#f0f3e8' },
  amber: { bg: '#f1e3d2', liquid: '#d79a55', deep: '#b26f36', glow: '#f8eddd' },
}

function Jars({ count, tone }: { count: number; tone: ProductTone }) {
  const n = Math.max(1, Math.min(count, 4))
  const t = tones[tone]
  const rows: Record<number, number[]> = {
    1: [160],
    2: [122, 198],
    3: [86, 160, 234],
    4: [58, 130, 202, 274],
  }
  const positions = rows[n]
  const scale = n <= 2 ? 1 : n === 3 ? 0.9 : 0.82

  return (
    <svg viewBox="0 0 320 420" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`glass-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="0.5" stopColor={t.glow} stopOpacity="0.55" />
          <stop offset="1" stopColor={t.liquid} stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`fill-${tone}`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor={t.glow} />
          <stop offset="0.55" stopColor={t.liquid} />
          <stop offset="1" stopColor={t.deep} />
        </linearGradient>
        <linearGradient id={`lid-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecd7a8" />
          <stop offset="0.45" stopColor="#c9a668" />
          <stop offset="1" stopColor="#9d7a3f" />
        </linearGradient>
        <radialGradient id={`halo-${tone}`} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#fffaf0" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="212" rx="150" ry="150" fill={`url(#halo-${tone})`} />
      <ellipse cx="160" cy="342" rx="128" ry="13" fill={t.deep} opacity="0.13" />

      {positions.map((x, i) => (
        <g
          key={i}
          transform={`translate(${x} ${i % 2 === 0 ? 322 : 312}) scale(${scale})`}
          opacity={0.98}
        >
          <rect x="-37" y="-58" width="74" height="90" rx="13" fill={`url(#glass-${tone})`} />
          <rect x="-30" y="-46" width="60" height="72" rx="9" fill={`url(#fill-${tone})`} />
          <rect x="-30" y="-46" width="14" height="72" rx="7" fill="#ffffff" opacity="0.28" />
          <rect x="-33" y="-76" width="66" height="19" rx="4.5" fill={`url(#lid-${tone})`} />
          <rect x="-33" y="-71" width="66" height="2.4" fill="#ffffff" opacity="0.32" />
          <rect x="-35" y="-58" width="70" height="2.2" fill="#ffffff" opacity="0.4" />
          <rect x="-27" y="-36" width="54" height="42" fill="#fbf6ec" opacity="0.93" />
          <line x1="-27" y1="-36" x2="27" y2="-36" stroke={t.deep} strokeOpacity="0.3" />
          <line x1="-27" y1="6" x2="27" y2="6" stroke={t.deep} strokeOpacity="0.3" />
          <text
            x="0"
            y="-15"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="12"
            letterSpacing="1.4"
            fill={t.deep}
          >
            ECHO
          </text>
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="3.4"
            letterSpacing="1.2"
            fill={t.deep}
            opacity="0.75"
          >
            NUSANTARA
          </text>
        </g>
      ))}
    </svg>
  )
}

function Nest({ tone }: { tone: ProductTone }) {
  const t = tones[tone]
  return (
    <svg viewBox="0 0 320 420" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id={`nest-halo-${tone}`} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#fffaf0" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`strand-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.glow} />
          <stop offset="0.5" stopColor={t.liquid} />
          <stop offset="1" stopColor={t.deep} />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="210" rx="150" ry="150" fill={`url(#nest-halo-${tone})`} />
      <ellipse cx="160" cy="300" rx="120" ry="14" fill={t.deep} opacity="0.12" />

      <g transform="translate(160 208)" fill="none" stroke={`url(#strand-${tone})`} strokeLinecap="round">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx="0"
            cy={i * 6 - 12}
            rx={96 - i * 14}
            ry={58 - i * 8}
            strokeWidth={2.4}
            opacity={0.85 - i * 0.1}
            transform={`rotate(${(i - 2) * 4})`}
          />
        ))}
        {[
          'M-96 -18 C-60 -52 -20 -60 22 -50',
          'M-78 14 C-40 -12 10 -18 60 -4',
          'M-58 40 C-24 20 22 18 62 34',
          'M-40 56 C-6 42 30 44 58 56',
          'M-70 -30 C-46 -44 4 -48 44 -34',
        ].map((d, i) => (
          <path key={d} d={d} strokeWidth={1.6} opacity={0.55 + i * 0.06} />
        ))}
      </g>

      <g fill={t.deep} opacity="0.5">
        <circle cx="112" cy="176" r="1.6" />
        <circle cx="206" cy="164" r="1.3" />
        <circle cx="196" cy="244" r="1.5" />
        <circle cx="120" cy="246" r="1.2" />
      </g>
    </svg>
  )
}

export function ProductPlate({
  image,
  alt,
  kind,
  tone,
  artCount,
  className,
}: {
  image: string
  alt: string
  kind: ProductKind
  tone: ProductTone
  artCount: number
  className?: string
}) {
  // Track which src finished loading so a variant swap fades the new photo in
  // instead of flashing the previous one.
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const t = tones[tone]

  return (
    <div className={cx('relative isolate h-full w-full overflow-hidden', className)} style={{ backgroundColor: t.bg }}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 90% at 50% 20%, ${t.glow} 0%, ${t.bg} 62%, ${t.bg} 100%)` }}
      />
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="absolute inset-0 px-4 pb-6 pt-10 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
        {kind === 'drink' ? <Jars count={artCount} tone={tone} /> : <Nest tone={tone} />}
      </div>
      <div key={image} className="photo-in absolute inset-0">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoadedSrc(image)}
          onError={() => setLoadedSrc(null)}
          className={cx(
            'h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out group-hover:scale-[1.045]',
            loadedSrc === image ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    </div>
  )
}
