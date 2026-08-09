import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Folder, Plus } from 'lucide-react';
import { projects } from '../data/portfolio';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

/** Projects revealed per click of "Load more" - also the initial page size. */
const PAGE_SIZE = 3;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const justLoaded = useRef(false);

  const visible = projects.slice(0, visibleCount);
  const remaining = projects.length - visibleCount;

  const handleLoadMore = () => {
    justLoaded.current = true;
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, projects.length));
  };

  // Focus otherwise stays on the button, which is what we want - except on the final
  // click, where the button unmounts and would drop focus to the top of the document.
  useEffect(() => {
    if (!justLoaded.current) return;
    justLoaded.current = false;
    if (visibleCount >= projects.length) statusRef.current?.focus();
  }, [visibleCount]);

  return (
    <Section id="projects" tone="muted">
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        description="Research, applied machine learning, and full-stack products."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <li key={project.title} className="flex">
            <Reveal delay={(index % 3) * 90} className="flex w-full">
              <Card interactive spotlight className="flex w-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-105">
                    <Folder className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs tabular-nums text-fg-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 text-pretty text-lg font-semibold leading-snug tracking-tight text-fg">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 transition-colors duration-300 hover:text-brand"
                    >
                      {/* Stretched link keeps the whole card clickable without nesting anchors. */}
                      <span className="after:absolute after:inset-0 after:content-['']">
                        {project.title}
                      </span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="mt-3 flex-1 text-pretty text-[0.9375rem] leading-relaxed text-fg-muted">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-surface-muted px-2 py-1 font-mono text-[0.7rem] text-fg-muted transition-colors duration-300 group-hover:border-brand/20 group-hover:text-fg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-center gap-4">
        {remaining > 0 && (
          <Button variant="secondary" size="lg" icon={Plus} onClick={handleLoadMore}>
            Load more projects
          </Button>
        )}

        <p
          ref={statusRef}
          tabIndex={-1}
          aria-live="polite"
          className="font-mono text-xs tabular-nums text-fg-subtle focus:outline-none"
        >
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>
    </Section>
  );
}
