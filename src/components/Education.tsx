import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Reveal from './ui/Reveal';

export default function Education() {
  return (
    <Section id="education" tone="muted">
      <SectionHeading
        eyebrow="Education"
        title="Academic Background"
        description="A path through mathematics and computer science into applied AI."
      />

      <ol className="relative mx-auto max-w-3xl">
        {/* Timeline spine - fades in at both ends so it never looks cut off. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[1.4375rem] top-6 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-7"
        />

        {education.map((edu, index) => (
          <li key={`${edu.institution}-${edu.period}`} className="relative pb-6 last:pb-0">
            <Reveal delay={index * 80} className="flex gap-5 sm:gap-7">
              <span className="relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-brand shadow-card sm:h-14 sm:w-14">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </span>

              <Card interactive spotlight className="flex-1 p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-pretty text-lg font-semibold tracking-tight text-fg">
                    {edu.degree}
                  </h3>
                  <Badge tone="brand" mono className="shrink-0">
                    {edu.period}
                  </Badge>
                </div>

                <p className="mt-2 font-medium text-fg-muted">{edu.institution}</p>

                {edu.thesis && (
                  <div className="relative mt-4 overflow-hidden rounded-xl bg-surface-muted/70 p-4">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-brand to-accent"
                    />
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
                      Thesis
                    </p>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg">
                      {edu.thesis}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
                    Grade
                  </span>
                  <Badge tone="outline" mono>
                    {edu.grade}
                  </Badge>
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
