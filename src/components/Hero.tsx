import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, X } from 'lucide-react';
import { contactInfo, experience, projects, skills } from '../data/portfolio';
import { useHeroReady } from '../hooks/useImageLoaded';
import Button from './ui/Button';
import Skeleton from './ui/Skeleton';
import { cn } from '../lib/cn';
import profileImage from '../../assets/images/profile.jpeg';

/** Counts come straight from the portfolio data, so they can never drift. */
const stats = [
  { value: projects.length, label: 'Projects' },
  { value: experience.length, label: 'Roles held' },
  { value: skills.programming.length + skills.frameworks.length, label: 'Languages & frameworks' },
];

/** Most recent role sits first in the data, so the chip always shows where he is now. */
const currentRole = experience[0];

function HeroSkeleton() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
      <div>
        <Skeleton className="h-7 w-56 rounded-full" />
        <div className="mt-7 space-y-3">
          <Skeleton className="h-12 w-full max-w-md sm:h-16" />
          <Skeleton className="h-12 w-3/4 max-w-sm sm:h-16" />
        </div>
        <Skeleton className="mt-6 h-6 w-72 max-w-full" />
        <div className="mt-5 space-y-2.5">
          <Skeleton className="h-4 w-full max-w-lg" />
          <Skeleton className="h-4 w-2/3 max-w-sm" />
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Skeleton className="h-12 w-36 rounded-xl" />
          <Skeleton className="h-12 w-32 rounded-xl" />
          <Skeleton className="h-12 w-32 rounded-xl" />
        </div>
        <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <Skeleton className="h-8 w-12" />
              <Skeleton className="h-3 w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Skeleton className="h-64 w-64 rounded-full sm:h-80 sm:w-80" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ready = useHeroReady(profileImage);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    closeButtonRef.current?.focus();
    const trigger = triggerRef.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      trigger?.focus();
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="home" className="relative scroll-mt-24 overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        {/* Ambient background: grid, aurora blooms, and a soft floor fade. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-pattern mask-radial-fade absolute inset-0" />
          <div className="absolute -top-32 left-[6%] h-[30rem] w-[30rem] animate-aurora rounded-full bg-brand/30 blur-[130px]" />
          <div
            className="absolute -right-24 top-16 h-[28rem] w-[28rem] animate-aurora rounded-full bg-accent/25 blur-[130px]"
            style={{ animationDelay: '-6s' }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
        </div>

        <div className="container-page">
          {!ready ? (
            <HeroSkeleton />
          ) : (
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div className="animate-fade-up text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-fg-muted shadow-card backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to collaborations &amp; opportunities
                </span>

                <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-[4.25rem]">
                  TCHABET KAMAHA
                  <br />
                  <span className="text-gradient">Genie Ricken</span>
                </h1>

                <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-sm uppercase tracking-[0.18em] text-fg-muted sm:text-base lg:justify-start">
                  <span>Data Scientist</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
                  <span>Software Engineer</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
                  <span>Researcher</span>
                </p>

                <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fg-muted lg:mx-0">
                  Building intelligent, data-driven systems with agentic AI and large language
                  models.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <Button
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={Linkedin}
                    iconRight={ArrowUpRight}
                    size="lg"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={Github}
                    size="lg"
                  >
                    GitHub
                  </Button>
                  <Button
                    href={`mailto:${contactInfo.email}`}
                    variant="secondary"
                    icon={Mail}
                    size="lg"
                  >
                    Email
                  </Button>
                </div>

                <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 lg:mx-0">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-mono text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                          {stat.value}
                        </span>
                        <span className="mt-1 block text-xs leading-snug text-fg-subtle">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex animate-scale-in justify-center lg:justify-end">
                <div className="relative">
                  {/* Slowly rotating conic ring behind the portrait. */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 animate-spin-slow rounded-full opacity-70 blur-[2px]"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0deg, rgb(var(--brand) / 0.65) 90deg, rgb(var(--accent) / 0.55) 200deg, transparent 320deg)',
                    }}
                  />
                  <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="View profile photo full size"
                    className="group relative block h-64 w-64 rounded-full p-[3px] transition-transform duration-500 ease-spring hover:scale-[1.03] sm:h-80 sm:w-80"
                    style={{
                      background:
                        'linear-gradient(145deg, rgb(var(--brand)), rgb(var(--brand-alt)), rgb(var(--accent)))',
                    }}
                  >
                    <span className="block h-full w-full overflow-hidden rounded-full bg-surface-muted">
                      <img
                        src={profileImage}
                        alt="TCHABET KAMAHA Genie Ricken"
                        width={640}
                        height={640}
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                      />
                    </span>
                  </button>

                  <div className="absolute -left-10 top-6 hidden animate-float rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-lift backdrop-blur lg:block">
                    <p className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-subtle">
                      Focus
                    </p>
                    <p className="text-sm font-medium text-fg">Agentic AI</p>
                  </div>

                  <div
                    className="absolute -bottom-3 -right-6 hidden animate-float rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-lift backdrop-blur lg:block"
                    style={{ animationDelay: '-3s' }}
                  >
                    <p className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-fg-subtle">
                      <Sparkles className="h-3 w-3 text-brand" />
                      Now
                    </p>
                    <p className="text-sm font-medium text-fg">{currentRole.location}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <a
            href="#about"
            className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle transition-colors duration-300 hover:text-fg sm:flex"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            Scroll
          </a>
        </div>
      </section>

      {/* Profile photo lightbox */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Profile photo"
        className={cn(
          'fixed inset-0 z-[70] flex items-center justify-center p-6 transition-all duration-300',
          isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setIsModalOpen(false)}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        <div
          className={cn(
            'relative transition-all duration-300 ease-spring',
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close"
            tabIndex={isModalOpen ? 0 : -1}
            className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg shadow-lift transition-transform duration-200 hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="rounded-3xl p-[3px] shadow-2xl"
            style={{
              background:
                'linear-gradient(145deg, rgb(var(--brand)), rgb(var(--brand-alt)), rgb(var(--accent)))',
            }}
          >
            <img
              src={profileImage}
              alt="TCHABET KAMAHA Genie Ricken"
              className="h-[min(72vh,28rem)] w-[min(80vw,28rem)] rounded-[1.35rem] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
