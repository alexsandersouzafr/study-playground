import React, { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="h-16 w-48 shrink-0 rounded-xl border-2 border-zinc-700 bg-sky-50 font-sans text-lg text-zinc-700 transition-all duration-500 hover:border-sky-800 hover:bg-sky-800 hover:text-sky-100">
      {children}
    </button>
  );
}
