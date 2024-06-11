import React from "react";
import Button from "./button";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="box-border grid h-[100vh] grid-cols-[auto,50%,100px] gap-16 overflow-hidden p-8 pt-32 *:rounded-xl">
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
              "--i": 10,
              "--slide-direction": "slide-up",
            } as React.CSSProperties
          }
        >
          Ut do commodo occaecat elit adipisicing. Occaecat ipsum culpa officia
          occaecat nisi id elit est do ad fugiat pariatur commodo consectetur.
          Anim commodo est consectetur cillum commodo consectetur cillum. Esse
          tempor consectetur quis mollit. Laborum enim consequat excepteur
          tempor id minim incididunt officia dolor et consequat tempor et.
          Labore proident elit amet aute quis dolor.
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
          Veniam aute ea esse minim anim amet ex sit in cillum est. Et mollit
          officia id qui velit. Lorem et do voluptate sint irure officia minim
          dolore. Aliquip excepteur veniam qui fugiat sunt. Incididunt sit
          aliqua esse cillum esse eu exercitation est. Ea aliqua incididunt
          occaecat aute proident proident magna aliqua dolore sint nisi.
        </p>
        <Button>Rubrum</Button>
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
          className="slide flex h-max flex-col gap-4 overflow-hidden bg-sky-200 p-8 text-zinc-600"
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
            Know The Seeres Paddra Nsu-Yeul
          </div>
          <p
            className="slide"
            style={
              {
                "--i": 15,
                "--slide-direction": "slide-down",
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
                "--slide-direction": "slide-left",
              } as React.CSSProperties
            }
          >
            —Sermons of the seeress Paddra Nsu-Yeul
          </p>
          <Button>Know more</Button>
        </div>
        <div
          style={
            {
              "--i": 14,
              "--slide-direction": "slide-left",
            } as React.CSSProperties
          }
          className="relative overflow-hidden border border-zinc-600 bg-sky-50"
        >
          <Image
            src="/wheel.jpg"
            fill
            className="object-cover opacity-70"
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
