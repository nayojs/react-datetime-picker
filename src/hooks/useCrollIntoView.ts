import { useEffect, useRef } from "react";

export const useScrollIntoView = <T extends HTMLElement>(trigger: any) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (trigger && elementRef.current) {
      elementRef.current.scrollIntoView({ block: "center" });
    }
  }, [trigger]);

  return elementRef;
};
