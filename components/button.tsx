import React, { CSSProperties, ReactNode } from "react";

export default function Button({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}) {
  return (
    <button
      style={style}
      className="slide h-16 w-48 shrink-0 rounded-xl border-2 border-zinc-700 bg-sky-50 font-sans text-lg text-zinc-700 transition-all duration-500 hover:border-sky-950 hover:bg-sky-100 hover:text-sky-950"
    >
      {children}
    </button>
  );
}
