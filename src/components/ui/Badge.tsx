import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Tone = 'neutral' | 'brand' | 'accent' | 'outline';

const tones: Record<Tone, string> = {
  neutral: 'border-border bg-surface-muted text-fg-muted',
  brand: 'border-brand/25 bg-brand/10 text-brand',
  accent: 'border-accent/25 bg-accent/10 text-accent',
  outline: 'border-border bg-transparent text-fg-subtle',
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  mono?: boolean;
}

export default function Badge({ children, tone = 'neutral', className, mono = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none',
        mono && 'font-mono tracking-tight',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
