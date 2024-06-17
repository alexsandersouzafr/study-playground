"use client";

import { useGSAP } from "@gsap/react";
import { Magic1 } from "./svgs/magic1";
import { Magic2 } from "./svgs/magic2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const section2 = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section2.current,
            start: "top 20%",
            end: "bottom bottom",
            toggleActions: "play play reverse reverse",
            scrub: 3,
            // markers: true,
          },
        })
        .from("h1", { opacity: 0, duration: 1, ease: "power1" })
        .from(".magic1", {
          opacity: 0,
          duration: 0.5,
          ease: "power1",
        })
        .from(".magic2", {
          opacity: 0,
          duration: 1,
          stagger: 0.95,
          ease: "power1",
        });
    },
    { scope: section2 },
  );

  return (
    <section
      ref={section2}
      className="relative flex h-screen w-full justify-center overflow-hidden bg-sky-950"
    >
      <MagicCircle />
      <h1 className="mt-40 w-[80%] text-center font-serif text-6xl text-sky-50">
        Believing in <span className="text-amber-300">Magic</span> can
        <br />
        make you strong.
      </h1>
    </section>
  );
}

const MagicCircle = () => (
  <div className="absolute bottom-0 left-[50%] flex items-center justify-center">
    <Magic1 className="magic1 absolute animate-spin-slow text-sky-700" />
    <Magic2 className="magic2 absolute animate-spin-slow-2 text-sky-100" />
  </div>
);
