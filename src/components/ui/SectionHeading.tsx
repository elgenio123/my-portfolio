import { cn } from '../../lib/cn';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={cn('mb-14 sm:mb-20', centered && 'text-center', className)}>
      <p className={cn('eyebrow', centered && 'justify-center')}>
        <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-transparent to-brand" />
        {eyebrow}
        <span aria-hidden="true" className="h-px w-6 bg-gradient-to-l from-transparent to-brand" />
      </p>

      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
