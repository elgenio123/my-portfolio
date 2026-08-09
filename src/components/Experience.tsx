import { Briefcase, Building2, Globe, Laptop, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { experience } from '../data/portfolio';
import type { WorkArrangement } from '../types';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

const arrangementIcons: Record<WorkArrangement, LucideIcon> = {
  'On-site': Building2,
  Remote: Globe,
  Hybrid: Laptop,
};

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        description="Applied machine learning across research, industry, and teaching."
      />

      <ol className="relative mx-auto max-w-3xl">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[1.4375rem] top-6 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-7"
        />

        {experience.map((exp, index) => {
          const ArrangementIcon = arrangementIcons[exp.arrangement];
          return (
          <li key={`${exp.company}-${exp.period}`} className="relative pb-6 last:pb-0">
            <Reveal delay={index * 80} className="flex gap-5 sm:gap-7">
              <span className="relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-card sm:h-14 sm:w-14">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </span>

              <Card interactive spotlight className="flex-1 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-fg">{exp.position}</h3>
                    <p className="mt-1 font-medium text-accent">{exp.company}</p>
                  </div>
                  <Badge tone="accent" mono className="shrink-0">
                    {exp.period}
                  </Badge>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-fg-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {exp.location}
                  </span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-fg-subtle/50" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-fg-muted">
                    <ArrangementIcon className="h-3 w-3 shrink-0" strokeWidth={2} />
                    {exp.arrangement}
                  </span>
                </div>

                <p className="mt-4 text-pretty leading-relaxed text-fg-muted">{exp.description}</p>
              </Card>
            </Reveal>
          </li>
          );
        })}
      </ol>
    </Section>
  );
}
