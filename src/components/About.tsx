import { Bot, Brain, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Reveal from './ui/Reveal';

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  iconTone: string;
}

const pillars: Pillar[] = [
  {
    icon: Bot,
    title: 'Agentic AI & LLMs',
    description:
      'Building agentic systems and LLM-powered applications, including retrieval-augmented generation over real-world corpora.',
    accent: 'from-brand/12',
    iconTone: 'bg-brand/10 text-brand ring-brand/20',
  },
  {
    icon: Brain,
    title: 'AI Research',
    description:
      'Machine learning and deep learning research, currently on statistically grounded automated debugging of ML models.',
    accent: 'from-accent/12',
    iconTone: 'bg-accent/10 text-accent ring-accent/20',
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Full-stack development with expertise in modern frameworks and data-driven applications.',
    accent: 'from-fg/[0.06]',
    iconTone: 'bg-surface-muted text-fg-muted ring-border',
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Research-driven engineering, applied to real systems"
        description="Where mathematics, machine learning, and security engineering meet."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-6">
          <p className="text-lg leading-relaxed text-fg-muted">
            I am an AI and software development professional with a strong interest in{' '}
            <span className="font-medium text-fg">agentic AI and large language models</span>.
          </p>
          <p className="text-lg leading-relaxed text-fg-muted">
            I hold a Master's degree in Computer Science from the{' '}
            <span className="font-medium text-fg">University of Dschang</span>, where I researched
            Dynamic Adversarial Modeling for Intrusion Detection in IoT Environments.
          </p>
          <p className="text-lg leading-relaxed text-fg-muted">
            I am currently pursuing a{' '}
            <span className="font-medium text-fg">Cooperative Master's in Data Science</span> at
            AIMS Cameroon, leveraging my background in Mathematics and Computer Science to design
            intelligent, data-driven solutions for system security and automation.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-surface-muted/60 p-6">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand via-brand-alt to-accent"
            />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-fg-subtle">
              Current focus
            </p>
            <p className="mt-3 text-pretty text-base leading-relaxed text-fg">
              Agentic AI and large language models - building LLM-powered systems such as
              retrieval-augmented generation, and using agents to automate the debugging of machine
              learning models.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 90}>
                <Card interactive spotlight className="h-full p-6">
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent} to-transparent opacity-70`}
                  />
                  <div className="relative">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${pillar.iconTone}`}
                    >
                      <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-fg-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
