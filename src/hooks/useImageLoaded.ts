import { useEffect, useState } from 'react';

/**
 * Resolves once the image has actually decoded and the webfonts are ready, so the
 * hero can swap its skeleton for real content in a single, flicker-free step.
 * Falls back after `timeout` so a slow font/CDN never leaves the skeleton stuck.
 */
export function useHeroReady(src: string, timeout = 2500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setReady(true);
    };

    const image = new Image();
    image.src = src;
    const imageReady =
      typeof image.decode === 'function'
        ? image.decode().catch(() => undefined)
        : new Promise<void>((resolve) => {
            image.onload = () => resolve();
            image.onerror = () => resolve();
          });

    const fontsReady = document.fonts ? document.fonts.ready.catch(() => undefined) : Promise.resolve();

    const safety = new Promise<void>((resolve) => window.setTimeout(resolve, timeout));

    Promise.race([Promise.all([imageReady, fontsReady]), safety]).then(finish);

    return () => {
      cancelled = true;
    };
  }, [src, timeout]);

  return ready;
}
