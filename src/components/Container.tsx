import type { ReactNode } from 'react'

import { cx } from '../lib/cx'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('mx-auto w-full max-w-[1280px] px-6 sm:px-10', className)}>{children}</div>
}
