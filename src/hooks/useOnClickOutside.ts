import { useEffect, RefObject } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
  extraCondition: Boolean = true
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (el && !el.contains(event.target as Node) && extraCondition) {
        return handler(event);
      }
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

    // Reload only if ref or handler changes
  }, [ref, handler, extraCondition]);
}

export default useOnClickOutside;
