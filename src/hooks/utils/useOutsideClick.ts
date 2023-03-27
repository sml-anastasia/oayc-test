import { MutableRefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const el = event.target;
      if (ref.current && el instanceof Node && !ref.current.contains(el)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
