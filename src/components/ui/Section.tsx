import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  /** `muted` gives the alternating band its slightly recessed surface. */
  tone?: 'base' | 'muted';
  className?: string;
}

export default function Section({ id, children, tone = 'base', className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-20 sm:py-28',
        tone === 'muted' && 'bg-surface-muted/50',
        className
      )}
    >
      {/* Hairline divider that fades out at the edges - softer than a full-width rule. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="container-page">{children}</div>
    </section>
  );
}
