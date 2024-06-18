/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import Button from "./button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const container = useRef(null);

  useGSAP(
    () => {
      const intro = gsap.timeline();
      const mm = gsap.matchMedia();

      gsap.fromTo(
        container.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      );

      mm.add("(max-width: 1023px)", () => {
        const exitTrigger = {
          trigger: container.current,
          start: "75% top",
          scrub: 3,
          toggleActions: "play play reverse reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack
          // markers: true,
        };
        gsap.to(".goddess", {
          scrollTrigger: exitTrigger,
          x: -50,
          duration: 2,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(".yeul", {
          scrollTrigger: exitTrigger,
          y: 50,
          duration: 1,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(".picture", {
          scrollTrigger: exitTrigger,
          x: 50,
          duration: 1,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(container.current, {
          scrollTrigger: exitTrigger,
          backgroundColor: "rgb(8, 47, 73)",
          duration: 2,
          ease: "power1",
        });
      });

      mm.add("(min-width:1024px)", () => {
        const exitTrigger = {
          trigger: container.current,
          start: "top top",
          scrub: 3,
          toggleActions: "play play reverse reverse", // onEnter, onLeave, onEnterBack, and onLeaveBack
          // markers: true,
        };
        gsap.to(".goddess", {
          scrollTrigger: exitTrigger,
          x: -50,
          duration: 2,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(".yeul", {
          scrollTrigger: exitTrigger,
          y: 50,
          duration: 1,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(".picture", {
          scrollTrigger: exitTrigger,
          x: 50,
          duration: 1,
          opacity: 0,
          ease: "power1",
        });
        gsap.to(container.current, {
          scrollTrigger: exitTrigger,
          backgroundColor: "rgb(8, 47, 73)",
          duration: 2,
          ease: "power1",
        });
      });

      intro
        .from(".slide", {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: 2,
          ease: "power1",
          stagger: 0.1,
        })
        .from("p", {
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power1",
          stagger: 0.3,
        })
        .from(
          ".signature",
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power1",
            stagger: 0.5,
          },
          "-=25%",
        )
        .from(
          ".button",
          {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power1",
            stagger: 0.8,
          },
          "-=80%",
        );
    },
    { scope: container },
  );
  return (
    <div
      className="section flex flex-col gap-8 p-2 py-8 pt-32 opacity-0 *:rounded-xl lg:grid lg:grid-cols-[4fr,4fr,1fr] lg:py-16 lg:pt-24 xl:h-screen xl:px-8"
      ref={container}
    >
      <div className="slide goddess flex h-full flex-col justify-between gap-8 border-zinc-600 bg-sky-50 p-4 text-sky-600 shadow-lg lg:p-8">
        <h1 className="slide font-serif text-4xl font-medium lg:text-5xl xl:text-7xl">
          The Gift Of The Godddess
        </h1>
        <div className="space-y-4 text-sm text-sky-800 lg:text-base">
          <p>
            Infinite in mystery is the gift of the Goddess
            <br />
            We seek it thus, and take to the sky
            <br />
            Ripples form on the water's surface
            <br />
            The wandering soul knows no rest
          </p>
          <p>
            There is no hate, only joy
            <br />
            For you are beloved by the goddess
            <br />
            Hero of the dawn,Healer of worlds
            <br />
            Dreams of the morrow hath the shattered soul
            <br />
            Pride is lost Wings stripped away, the end is nigh
          </p>
          <p>
            Even if the morrow is barren of promises
            <br />
            Nothing shall forestall my return
            <br />
            To become the dew that quenches the land
            <br />
            To spare the sands, the seas, the skies
            <br />I offer thee this silent sacrifice
          </p>
        </div>
        <div className="button">
          <Button>Read Loveless</Button>
        </div>
      </div>
      <div className="slide flex h-full flex-col gap-16 text-sky-50 *:rounded-xl lg:gap-4">
        <div className="slide yeul flex h-max shrink-0 flex-col gap-4 overflow-hidden bg-amber-50 p-4 text-zinc-600 shadow-sm">
          <div className="slide flex items-center justify-between p-0 font-serif text-2xl text-sky-950">
            Paddra Nsu-Yeul
          </div>
          <p>
            Her Providence sought nothing. Her Providence made nothing. She but
            looked on, silent in Her sorrow. The Goddess pitied mortals,
            destined as they were to die, and so She deigned to intervene in the
            hour of their greatest peril. She averted cataclysm that was to be,
            and put to rest the ones who would have robbed so many of what time
            fate had ordained. Her compassion did not end at this. The Goddess
            pitied also those subjected to that fate of Focus, crueler still
            than death. To them She sent Her messengers, to deliver hope when
            all was lost.
          </p>
          <p className="text-right italic">
            —Sermons of the seeress Paddra Nsu-Yeul
          </p>
          <div className="button">
            <Button>Know more</Button>
          </div>
        </div>
        <div className="slide picture relative h-96 w-full overflow-hidden bg-zinc-200 shadow-md lg:h-full">
          <Image
            src="/goddess.jpg"
            fill
            className="object-cover object-[0,10%] mix-blend-overlay"
            alt="arcana"
          />
        </div>
      </div>
      <div className="signature writing-vertical hidden items-center gap-4 border-none text-zinc-600 lg:flex">
        Made by Alexsander Souza. <div className="h-40 w-[1px] bg-zinc-600" />
      </div>
    </div>
  );
}
