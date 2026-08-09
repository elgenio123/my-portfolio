import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently under the top of the viewport.
 * `ids` must be a stable reference (declare it at module scope).
 */
export function useScrollSpy(ids: readonly string[], offset = 200) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) current = id;
      }

      // The last section is often too short to ever reach the offset line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
