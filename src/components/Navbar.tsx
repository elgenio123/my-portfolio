import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../lib/cn';
import logoImage from '../../assets/images/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const;

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock the page and wire up Escape while the mobile sheet is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-spring',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'flex h-14 items-center justify-between gap-3 rounded-2xl border px-2.5 transition-all duration-500 ease-spring sm:px-3',
            scrolled
              ? 'glass border-border shadow-card'
              : 'border-transparent bg-transparent shadow-none'
          )}
        >
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="flex items-center gap-2.5 rounded-xl px-1 py-1 transition-opacity duration-200 hover:opacity-80"
            aria-label="Go to top"
          >
            <img src={logoImage} alt="" className="h-9 w-9 rounded-lg object-contain" />
            <span className="hidden text-sm font-semibold tracking-tight text-fg sm:block">
              Genie Tchabet
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300',
                    isActive
                      ? 'bg-surface-muted text-fg'
                      : 'text-fg-muted hover:bg-surface-muted/60 hover:text-fg'
                  )}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand to-transparent transition-opacity duration-300',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-fg"
            >
              <Sun
                className={cn(
                  'absolute h-4 w-4 transition-all duration-500 ease-spring',
                  theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                )}
              />
              <Moon
                className={cn(
                  'absolute h-4 w-4 transition-all duration-500 ease-spring',
                  theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                )}
              />
            </button>

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, '#contact')}
              className="group hidden h-9 items-center gap-1.5 rounded-xl bg-brand px-3.5 text-[0.8125rem] font-medium text-white shadow-brand ring-1 ring-inset ring-white/15 transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-fg-muted transition-colors duration-200 hover:text-fg lg:hidden"
            >
              {isOpen ? (
                <X className="h-[1.125rem] w-[1.125rem]" />
              ) : (
                <Menu className="h-[1.125rem] w-[1.125rem]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'container-page lg:hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          id="mobile-menu"
          className={cn(
            'glass mt-2 origin-top overflow-hidden rounded-2xl border border-border p-2 shadow-lift transition-all duration-300 ease-spring',
            isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-2 scale-[0.98] opacity-0'
          )}
          aria-hidden={!isOpen}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  style={{ transitionDelay: isOpen ? `${index * 35 + 60}ms` : '0ms' }}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ease-spring',
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                    isActive ? 'bg-surface-muted text-fg' : 'text-fg-muted hover:bg-surface-muted/60'
                  )}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-1.5 w-1.5 rounded-full bg-brand transition-opacity duration-300',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
