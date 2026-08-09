import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/cn';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        'glass fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg-muted shadow-lift',
        'transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-brand/40 hover:text-fg sm:right-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <ArrowUp className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
    </button>
  );
}
