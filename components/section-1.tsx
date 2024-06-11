/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./button";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="grid h-[100vh] grid-cols-[auto,50%,100px] gap-16 p-8 pt-32 *:rounded-xl">
      <div
        style={
          {
            "--i": 7,
            "--slide-direction": "slide-right",
          } as React.CSSProperties
        }
        className="slide flex flex-col justify-between overflow-hidden border border-b-2 border-zinc-600 bg-sky-50 p-16 text-zinc-600"
      >
        <h1
          style={
            { "--i": 8, "--slide-direction": "slide-up" } as React.CSSProperties
          }
          className="slide font-serif text-7xl font-medium"
        >
          The Gift Of The Godddess
        </h1>
        <p
          className="slide"
          style={
            {
              "--i": 11,
              "--slide-direction": "slide-up",
            } as React.CSSProperties
          }
        >
          Infinite in mystery is the gift of the Goddess
          <br />
          We seek it thus, and take to the sky
          <br />
          Ripples form on the water's surface
          <br />
          The wandering soul knows no rest
        </p>
        <p
          className="slide"
          style={
            {
              "--i": 10,
              "--slide-direction": "slide-up",
            } as React.CSSProperties
          }
        >
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
        <p
          className="slide"
          style={
            {
              "--i": 9,
              "--slide-direction": "slide-up",
            } as React.CSSProperties
          }
        >
          Even if the morrow is barren of promises
          <br />
          Nothing shall forestall my return
          <br />
          To become the dew that quenches the land
          <br />
          To spare the sands, the seas, the skies
          <br />I offer thee this silent sacrifice
        </p>
        <Button
          style={
            {
              "--i": 18,
              "--slide-direction": "slide-right",
            } as React.CSSProperties
          }
        >
          Read Loveless
        </Button>
      </div>
      <div
        style={
          { "--i": 6, "--slide-direction": "slide-down" } as React.CSSProperties
        }
        className="slide grid grid-rows-[1fr,1fr] gap-6 text-sky-50 *:rounded-xl"
      >
        <div
          style={
            {
              "--i": 12,
              "--slide-direction": "slide-up",
            } as React.CSSProperties
          }
          className="slide flex h-max flex-col gap-4 overflow-hidden bg-sky-200 p-8 text-zinc-600 shadow-sm"
        >
          <div
            style={
              {
                "--i": 13,
                "--slide-direction": "slide-up",
              } as React.CSSProperties
            }
            className="slide flex items-center justify-between p-0 font-serif text-2xl text-zinc-600"
          >
            Paddra Nsu-Yeul
          </div>
          <p
            className="slide"
            style={
              {
                "--i": 15,
                "--slide-direction": "slide-up",
              } as React.CSSProperties
            }
          >
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
          <p
            className="slide text-right italic"
            style={
              {
                "--i": 16,
                "--slide-direction": "slide-up",
              } as React.CSSProperties
            }
          >
            —Sermons of the seeress Paddra Nsu-Yeul
          </p>
          <Button
            style={
              {
                "--i": 17,
                "--slide-direction": "slide-right",
              } as React.CSSProperties
            }
          >
            Know more
          </Button>
        </div>
        <div
          style={
            {
              "--i": 13,
              "--slide-direction": "slide-left",
            } as React.CSSProperties
          }
          className="slide relative overflow-hidden bg-zinc-200 shadow-md"
        >
          <Image
            src="/goddess.jpg"
            fill
            className="object-cover object-[0,10%] mix-blend-overlay"
            alt="arcana"
          />
        </div>
      </div>
      <div
        style={
          { "--i": 1, "--slide-direction": "slide-up" } as React.CSSProperties
        }
        className="slide writing-vertical flex items-center gap-4 border-none text-zinc-600"
      >
        Made by Alexsander Souza. <div className="h-40 w-[1px] bg-zinc-600" />
      </div>
    </div>
  );
}
