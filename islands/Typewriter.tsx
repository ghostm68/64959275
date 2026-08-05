import { useEffect, useRef } from "preact/hooks";

export default function Typewriter() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;

    const text = "WORDSTAR NEXUS";
    h1.innerText = "";
    let i = 0;

    const type = () => {
      if (i < text.length) {
        h1.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };

    type();
  }, []);

  return <h1 ref={h1Ref}>WORDSTAR NEXUS</h1>;
}
