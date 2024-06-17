import React, { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="h-10 w-48 shrink-0 rounded-xl border-sky-500 bg-sky-50 font-sans text-lg text-sky-700 shadow-lg shadow-sky-500/20 transition-all duration-500 hover:border-sky-800 hover:bg-sky-100 hover:text-sky-950">
      {children}
    </button>
  );
}
