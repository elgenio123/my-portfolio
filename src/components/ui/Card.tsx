import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds lift + border highlight on hover. */
  interactive?: boolean;
  /** Cursor-following glow. Pointer-only, so it costs nothing on touch. */
  spotlight?: boolean;
}

export default function Card({
  children,
  className,
  interactive = false,
  spotlight = false,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    node.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      className={cn(
        'group relative isolate overflow-hidden rounded-2xl border border-border bg-surface shadow-card',
        interactive &&
          'transition-all duration-500 ease-spring hover:-translate-y-1 hover:border-brand/35 hover:shadow-lift',
        className
      )}
    >
      {spotlight && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgb(var(--brand) / 0.13), transparent 62%)',
          }}
        />
      )}
      {/* Hairline that catches the light along the top edge. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-500 group-hover:via-brand/50"
      />
      {children}
    </div>
  );
}
