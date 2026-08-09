import { Loader2 } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  className?: string;
  children?: ReactNode;
}

type ButtonElementProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: never };

type AnchorElementProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

const base =
  'group/btn relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-xl font-medium ' +
  'transition-all duration-300 ease-spring will-change-transform ' +
  'disabled:pointer-events-none disabled:opacity-55 aria-disabled:pointer-events-none aria-disabled:opacity-55';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-brand ring-1 ring-inset ring-white/15 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:brightness-95',
  secondary:
    'border border-border bg-surface text-fg shadow-card hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface-muted active:translate-y-0',
  outline:
    'border border-border bg-transparent text-fg hover:border-brand/50 hover:bg-surface-muted/70 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-fg-muted hover:bg-surface-muted hover:text-fg',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-[0.8125rem]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.9375rem]',
};

const iconSizes: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-[1.05rem] w-[1.05rem]',
  lg: 'h-5 w-5',
};

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    loading = false,
    icon: Icon,
    iconRight: IconRight,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const iconClass = iconSizes[size];

  const content = (
    <>
      {/* Sheen that sweeps across on hover. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-spring group-hover/btn:translate-x-full"
      />
      {loading ? (
        <Loader2 className={cn(iconClass, 'animate-spin')} aria-hidden="true" />
      ) : (
        Icon && <Icon className={cn(iconClass, 'shrink-0')} aria-hidden="true" />
      )}
      <span className="relative">{children}</span>
      {IconRight && !loading && (
        <IconRight
          className={cn(iconClass, 'shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5')}
          aria-hidden="true"
        />
      )}
    </>
  );

  if ('href' in props && props.href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorRest} className={classes} aria-busy={loading || undefined}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type="button"
      {...buttonRest}
      className={classes}
      disabled={buttonRest.disabled || loading}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
