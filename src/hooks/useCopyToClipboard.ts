import { useCallback, useEffect, useRef, useState } from 'react';

export type CopyStatus = 'idle' | 'copying' | 'copied' | 'error';

/** The async clipboard API never settles when the document isn't focused, so cap the wait. */
const CLIPBOARD_TIMEOUT = 2000;

function legacyCopy(text: string) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
  document.body.appendChild(area);
  area.select();
  try {
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(area);
  }
}

async function writeToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise((_, reject) => window.setTimeout(reject, CLIPBOARD_TIMEOUT)),
      ]);
      return true;
    } catch {
      /* fall through to the synchronous fallback below */
    }
  }
  return legacyCopy(text);
}

export function useCopyToClipboard(resetAfter = 2000) {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timer = useRef<number | undefined>(undefined);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      window.clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(
    async (text: string) => {
      window.clearTimeout(timer.current);
      setStatus('copying');

      const ok = await writeToClipboard(text);
      if (!mounted.current) return;

      setStatus(ok ? 'copied' : 'error');
      timer.current = window.setTimeout(() => {
        if (mounted.current) setStatus('idle');
      }, resetAfter);
    },
    [resetAfter]
  );

  return { status, copy };
}
