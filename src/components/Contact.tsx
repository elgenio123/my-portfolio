import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { contactInfo } from '../data/portfolio';
import type { PhoneNumber } from '../types';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

interface ChannelProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  tone: string;
  copyable?: boolean;
  delay: number;
}

function Channel({ icon: Icon, label, value, href, tone, copyable = false, delay }: ChannelProps) {
  const { status, copy } = useCopyToClipboard();
  const copied = status === 'copied';

  return (
    <Reveal delay={delay} className="flex">
      <Card interactive spotlight className="flex w-full flex-col p-6">
        <div className="flex items-start gap-4">
          <span
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-500 ease-spring group-hover:scale-105 ${tone}`}
          >
            <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                className="mt-1.5 inline-flex items-center gap-1 break-words text-[0.9375rem] font-medium text-fg transition-colors duration-300 hover:text-brand"
              >
                {value}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ) : (
              <p className="mt-1.5 break-words text-[0.9375rem] font-medium text-fg">{value}</p>
            )}
          </div>
        </div>

        {copyable && (
          <div className="mt-5 border-t border-border pt-4">
            <Button
              variant="ghost"
              size="sm"
              icon={copied ? Check : Copy}
              loading={status === 'copying'}
              onClick={() => copy(value)}
              className={copied ? 'text-accent' : undefined}
            >
              {copied ? 'Copied' : status === 'error' ? 'Copy failed' : `Copy ${label.toLowerCase()}`}
            </Button>
            <span aria-live="polite" className="sr-only">
              {copied ? `${label} copied to clipboard` : ''}
            </span>
          </div>
        )}
      </Card>
    </Reveal>
  );
}

/** `tel:` hrefs must not contain spaces, but the displayed number reads better with them. */
const telHref = (number: string) => `tel:${number.replace(/\s+/g, '')}`;


function PhoneChannel({ phones, delay }: { phones: PhoneNumber[]; delay: number }) {
  return (
    <Reveal delay={delay} className="flex">
      <Card interactive spotlight className="flex w-full flex-col p-6">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-500 ease-spring group-hover:scale-105">
            <Phone className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} />
          </span>

          <div className="min-w-0 flex-1">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
              Phone
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {phones.map((phone) => (
                <li key={phone.number} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a
                    href={telHref(phone.number)}
                    className="text-[0.9375rem] font-medium text-fg transition-colors duration-300 hover:text-brand"
                  >
                    {phone.number}
                  </a>
                  <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-fg-subtle">
                    {phone.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </Card>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <Section id="contact" tone="muted">
      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        description="I'm always open to discussing new projects, collaborations, or opportunities in AI research and software development."
      />

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Channel
            icon={Mail}
            label="Email"
            value={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
            tone="bg-brand/10 text-brand ring-brand/20"
            copyable
            delay={0}
          />
          <PhoneChannel phones={contactInfo.phones} delay={90} />
          <Channel
            icon={MapPin}
            label="Location"
            value={contactInfo.location}
            tone="bg-emerald-500/10 text-emerald-500 ring-emerald-500/20"
            delay={180}
          />
        </div>

        <Reveal delay={120} className="mt-12">
          <Card className="relative overflow-hidden p-8 text-center sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.18] via-transparent to-accent/[0.18]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/30 blur-[90px]"
            />

            <div className="relative">
              <h3 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Let's build something intelligent
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-pretty leading-relaxed text-fg-muted">
                Whether it's research collaboration, a data problem, or a product to ship - the
                inbox is open.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={`mailto:${contactInfo.email}`} icon={Mail} size="lg">
                  Send an email
                </Button>
                <Button
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
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
                  iconRight={ArrowUpRight}
                  size="lg"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
