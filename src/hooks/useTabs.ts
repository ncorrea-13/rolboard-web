import { useRef, useState } from "react";

export function useTabs(count: number) {
  const [sel, setSel] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = count - 1;
    const to =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? i === last
          ? 0
          : i + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? i === 0
            ? last
            : i - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : -1;
    if (to < 0) return;
    e.preventDefault();
    setSel(to);
    refs.current[to]?.focus();
  };

  const ref = (i: number) => (el: HTMLButtonElement | null) => {
    refs.current[i] = el;
  };

  return { sel, setSel, onKeyDown, ref };
}
