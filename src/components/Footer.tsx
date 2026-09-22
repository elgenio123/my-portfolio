import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const quickLinks = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

const socials = [
  { label: 'GitHub', href: contactInfo.github, icon: Github, external: true },
  { label: 'LinkedIn', href: contactInfo.linkedin, icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${contactInfo.email}`, icon: Mail, external: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />

      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-fg">Genie Tchabet</h3>
            <p className="mt-3 max-w-sm text-pretty leading-relaxed text-fg-muted">
              Data Scientist, Software Engineer &amp; Researcher specializing in agentic AI, large
              language models, and data-driven software.
            </p>
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-fg-subtle">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {contactInfo.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-3"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
              Connect
            </h3>
            <div className="mt-4 flex gap-2">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-fg-muted transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-brand/40 hover:text-fg hover:shadow-card"
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-fg-subtle sm:text-left">
            © {currentYear} TCHABET KAMAHA Genie Ricken. All rights reserved.
          </p>
          <p className="font-mono text-xs text-fg-subtle">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
