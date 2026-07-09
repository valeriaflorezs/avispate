import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function useReveal<T extends HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const targets = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    targets.forEach((t) => {
      t.style.opacity = "0";
    });

    animate(targets, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      easing: "easeOutQuint",
      delay: stagger(90),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
