<!--
SYNC IMPACT REPORT
Version change: none (unfilled template) → 1.0.0
Bump rationale: Initial ratification. The prior file was the unmodified scaffold
with only unfilled placeholder tokens, so this is the first substantive adoption.

Modified principles:
- [PRINCIPLE_1_NAME] → I. Content Lives in Data, Not Components
- [PRINCIPLE_2_NAME] → II. Design Tokens, Not Theme Variants
- [PRINCIPLE_3_NAME] → III. Compose From Shared Primitives
- [PRINCIPLE_4_NAME] → IV. Accessible and Motion-Respectful by Default
- [PRINCIPLE_5_NAME] → V. Green Gates Before Merge (NON-NEGOTIABLE)

Added sections:
- Technology and Structure Constraints (was [SECTION_2_NAME])
- Development Workflow and Quality Gates (was [SECTION_3_NAME])

Removed sections: none

Deferred TODOs: none
-->

# My Portfolio Constitution

## Core Principles

### I. Content Lives in Data, Not Components

Portfolio content — experience, education, projects, skills, and contact details — MUST be
defined in `src/data/portfolio.ts` as typed values whose shapes live in `src/types/index.ts`.
Section components MUST render by mapping over that data and MUST NOT hard-code copy,
counts, or list items inline. Derived figures such as hero stat counts MUST be computed from
the source arrays (for example `projects.length`) rather than typed as literals.

Rationale: content changes are the most frequent change to this site. Keeping them in one
typed module means an update touches one file, cannot drift out of sync with the counts that
describe it, and never risks a regression in presentation logic.

### II. Design Tokens, Not Theme Variants

Color MUST be expressed through the token utilities backed by the RGB channel triples on
`:root` and `.dark` in `src/index.css` and mapped in `tailwind.config.js` (`--bg`, `--surface`,
`--surface-2`, `--border`, `--fg`, `--fg-muted`, `--fg-subtle`, `--brand`, `--brand-alt`,
`--accent`). New markup MUST use classes such as `bg-surface text-fg-muted border` and MUST NOT
use `dark:` prefixes. A `dark:` variant is permitted ONLY for a property that is genuinely
theme-specific and cannot be expressed as a token; each such use MUST carry a comment stating why.

Adding or renaming a token MUST update `src/index.css` (both `:root` and `.dark`) and
`tailwind.config.js` in the same change. The pre-paint inline theme script in `index.html`
MUST stay behaviorally identical to `getInitialTheme` in `src/context/ThemeContext.tsx`;
changing one without the other is a defect, because divergence flashes a white screen at
dark-mode visitors.

Rationale: one token set means every surface themes itself correctly, and the two theme
code paths only stay consistent if they are required to change together.

### III. Compose From Shared Primitives

Sections MUST be built from the primitives in `src/components/ui/` — `Button`, `Card`,
`Badge`, `Section`, `SectionHeading`, `Skeleton`, and `Reveal`. A section MUST NOT hand-roll
markup that duplicates a primitive's role. When a section needs behavior a primitive lacks,
the primitive MUST be extended with a prop rather than forked locally.

Adding a section MUST do all of: create the component, render it in the fixed order in
`src/App.tsx`, wrap it in `<Section id="...">`, add the matching id to `navLinks` in
`src/components/Navbar.tsx`, and continue the `tone="base"` / `tone="muted"` alternation.
An id that appears in one of those places and not the others is a defect: `navLinks` drives
both anchor scrolling and `useScrollSpy` active state.

Rationale: the nav, the scroll spy, and the visual rhythm are all derived from the same
declarations, so a partial addition produces a dead link or a stuck highlight.

### IV. Accessible and Motion-Respectful by Default

Entrance animation MUST be applied with `Reveal`, and sibling stagger MUST use its `delay`
prop rather than bespoke CSS animation delays. Any new motion MUST short-circuit to its
final state under `prefers-reduced-motion`, using `usePrefersReducedMotion` where a JS check
is needed. Interactive elements MUST be reachable and operable by keyboard, MUST expose an
accessible name, and MUST keep a visible focus indicator. Images MUST carry meaningful `alt`
text, or empty `alt` when purely decorative.

Asynchronous UI MUST resolve. Any wait on a browser API that can hang MUST be bounded by a
timeout fallback — as `useHeroReady` does around `decode()` and `document.fonts.ready`, and
as `useCopyToClipboard` does by racing `clipboard.writeText`, which never settles while the
document is unfocused. A spinner with no timeout is a defect, not a loading state.

Rationale: this is a public page read by strangers on unknown devices; a stuck spinner or an
unreachable control is indistinguishable from a broken site.

### V. Green Gates Before Merge (NON-NEGOTIABLE)

`npm run lint`, `npm run typecheck`, and `npm run build` MUST all pass before a change is
committed to `main`. Type errors MUST be fixed rather than suppressed: `any`, `@ts-ignore`,
`@ts-expect-error`, and `eslint-disable` are permitted only with an adjacent comment naming
the specific constraint that forces them. There is no test framework configured, so these
three gates are the entire automated safety net and MUST NOT be bypassed or made advisory.

Rationale: with no test suite, the compiler and the linter are the only checks standing
between a change and a broken deploy.

## Technology and Structure Constraints

The stack is fixed: Vite, React 18, TypeScript, and Tailwind, rendered as a single scrolling
document. The site MUST remain router-free and MUST NOT introduce backend or network calls at
runtime; all content ships in the bundle. Adding a router, a data-fetching layer, a state
management library, or a UI component framework is a MAJOR constitutional change and MUST be
amended in before it is implemented.

Additional standing constraints:

- Icons come from `lucide-react`, which MUST stay listed in `optimizeDeps.exclude` in
  `vite.config.ts`.
- Images live in `assets/images/`, outside `src/`. Components MUST import them by relative
  path (`../../assets/images/…`) so Vite fingerprints them; because `tsconfig.app.json`
  includes only `src`, those imports resolve through `src/vite-env.d.ts`, which MUST be kept
  current when a new asset type is introduced.
- React context MUST keep its provider and its consuming hook in separate files (as
  `src/context/ThemeContext.tsx` and `src/hooks/useTheme.ts` do) to preserve fast refresh.
- New dependencies MUST be justified against what the repo already has. The unused
  `@supabase/supabase-js` dependency MUST either gain a real use or be removed; it MUST NOT be
  cited as precedent for adding a backend client.

## Development Workflow and Quality Gates

- Changes MUST be scoped: a content update edits `src/data/portfolio.ts` and nothing else; a
  presentation change edits components and leaves content alone. A change that mixes both MUST
  explain why in its commit message.
- Every change MUST be verified in the running app (`npm run dev`) in BOTH light and dark
  themes, and at a narrow viewport, before it is committed.
- The three gates in Principle V MUST be run locally before commit; a commit that leaves any
  of them red MUST be fixed or reverted, not left for a follow-up.
- Work MUST be committed on a branch rather than directly to `main` when it spans more than a
  trivial edit, and commit messages MUST describe the user-visible effect.
- Review of any change MUST explicitly confirm token usage (Principle II), primitive reuse and
  complete section wiring (Principle III), and reduced-motion and keyboard behavior
  (Principle IV).

## Governance

This constitution supersedes other conventions and ad-hoc preferences for this repository.
Where `CLAUDE.md` and this document overlap, they MUST agree; if they conflict, this document
governs and `CLAUDE.md` MUST be corrected in the same change.

Amendments MUST be made by editing this file, MUST state the rationale in the Sync Impact
Report at its top, and MUST be committed separately from feature work. Versioning follows
semantic versioning:

- MAJOR: a principle is removed or redefined in a way that invalidates existing practice,
  including any change to the fixed stack constraints.
- MINOR: a principle or section is added, or existing guidance is materially expanded.
- PATCH: clarification, wording, or typo fixes that do not change what is required.

Compliance is reviewed at every change: the author self-checks against these principles before
committing, and any reviewer MUST reject a change that violates one without a stated,
time-bound justification. Complexity — a new dependency, a new abstraction, a bypassed gate —
MUST be justified against the simpler alternative that was rejected. Runtime development
guidance for agents lives in `CLAUDE.md` and MUST be kept consistent with this document.

**Version**: 1.0.0 | **Ratified**: 2026-09-02 | **Last Amended**: 2026-09-02
