import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
export const metadata: Metadata = {
  title: "The Crystarium",
  description: "The Gift of The Goddess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-sky-100">
      <body className="scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
