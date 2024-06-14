import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
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
    <html lang="en" className="bg-sky-200">
      <body className="relative scroll-smooth">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
