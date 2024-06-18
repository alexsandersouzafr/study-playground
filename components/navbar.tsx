"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

const navItems = ["brünhydr", "coeurl", "fenrir", "bismarck"];

export default function Navbar() {
  const nav = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.to("li", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "expo.in",
      });
    },
    { scope: nav },
  );

  return (
    <div className="fixed top-0 z-30 flex w-full flex-col items-center bg-sky-500/10 shadow-md shadow-sky-950/5 backdrop-blur-xl">
      <div
        className="flex w-full items-center justify-between px-2 py-2 lg:px-8"
        ref={nav}
      >
        <h1 className="reveal-right shrink-0 rounded-xl py-2 font-serif text-4xl">
          The Crystarium
        </h1>
        <nav>
          <ul className="hidden items-center gap-10 font-serif text-lg text-sky-800 lg:flex">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="-translate-y-12 cursor-pointer list-none rounded-lg border border-transparent px-6 py-1 tracking-widest opacity-0 transition-all duration-500 hover:border-sky-800/40"
              >
                {item}
              </li>
            ))}
            <li className="list-none stroke-[1px]">
              <Sparkles />
            </li>
          </ul>
        </nav>
      </div>
      <div className="line" />
    </div>
  );
}
