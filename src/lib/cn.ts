type ClassValue = string | false | null | undefined;

/** Minimal class name joiner - keeps JSX readable without pulling in a dependency. */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ');
}
