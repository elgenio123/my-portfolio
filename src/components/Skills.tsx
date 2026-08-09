import { Code, Database, Languages, Lightbulb, Layers, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '../data/portfolio';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
  tone: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    items: skills.programming,
    tone: 'bg-brand/10 text-brand ring-brand/20',
  },
  {
    title: 'Frameworks',
    icon: Layers,
    items: skills.frameworks,
    tone: 'bg-accent/10 text-accent ring-accent/20',
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    items: skills.tools,
    tone: 'bg-surface-muted text-fg-muted ring-border',
  },
  {
    title: 'Databases',
    icon: Database,
    items: skills.databases,
    tone: 'bg-emerald-500/10 text-emerald-500 ring-emerald-500/20',
  },
  {
    title: 'Areas of Expertise',
    icon: Lightbulb,
    items: skills.areas,
    tone: 'bg-amber-500/10 text-amber-500 ring-amber-500/20',
  },
  {
    title: 'Languages',
    icon: Languages,
    items: skills.languages,
    tone: 'bg-rose-500/10 text-rose-500 ring-rose-500/20',
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & Technologies"
        description="The stack I reach for across research, backend, and data work."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <li key={category.title} className="flex">
              <Reveal delay={(index % 3) * 90} className="flex w-full">
                <Card interactive spotlight className="flex w-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${category.tone}`}
                    >
                      <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-[0.9375rem] font-semibold tracking-tight text-fg">
                      {category.title}
                    </h3>
                    <span className="ml-auto font-mono text-xs tabular-nums text-fg-subtle">
                      {String(category.items.length).padStart(2, '0')}
                    </span>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-surface-muted px-2.5 py-1.5 text-[0.8125rem] font-medium text-fg-muted transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-brand/30 hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
