import { cx } from '../lib/cx'

// Swiftlet silhouette — long swept wings, forked tail. Decorative only.
const BIRD =
  'M60 10c4 0 7 3 12 4 9 2 21 2 33 5-10 4-23 5-33 4 8 5 15 13 20 25-9-9-18-17-26-23-2 5-4 10-6 17-2-7-4-12-6-17-8 6-17 14-26 23 5-12 12-20 20-25-10 1-23 0-33-4 12-3 24-3 33-5 5-1 8-4 12-4z'

const flock = [
  { size: 66, top: '13%', duration: 38, delay: 0, flap: 1.15, tone: 'text-gold/60' },
  { size: 40, top: '26%', duration: 30, delay: -11, flap: 0.85, tone: 'text-gold/40' },
  { size: 50, top: '5%', duration: 46, delay: -26, flap: 1.35, tone: 'text-ink-soft/30' },
]

// The birds live behind the hero content, so they read as atmosphere rather
// than a graphic. Reduced-motion users get no animation (the global rule
// stops it), leaving the hero clean.
export function FlyingSwallows({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cx('pointer-events-none absolute inset-x-0 top-0 bottom-16 overflow-hidden', className)}>
      {flock.map((bird) => (
        <span
          key={bird.duration}
          className={cx('absolute left-0 block', bird.tone)}
          style={{
            top: bird.top,
            width: bird.size,
            animation: `bird-fly ${bird.duration}s linear ${bird.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 120 64"
            className="h-auto w-full"
            style={{ animation: `bird-flap ${bird.flap}s ease-in-out infinite` }}
          >
            <path d={BIRD} fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  )
}
