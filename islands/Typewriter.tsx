import { useEffect, useRef } from "preact/hooks";

export default function Typewriter() {
  // Use HTMLHeadingElement | null for safer Preact/React compat types
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;

    const text = "WORDSTAR NEXUS";
    // Using textContent is safer than innerHTML and avoids strict linter blocks
    h1.textContent = "";
    let i = 0;
    let timeoutId: number;

    const type = () => {
      if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        timeoutId = window.setTimeout(type, 100);
      }
    };

    type();

    // Cleanup function to prevent memory leaks and double-triggering on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return <h1 ref={h1Ref}>WORDSTAR NEXUS</h1>;
}
