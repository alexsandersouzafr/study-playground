const navItems = ["brünhydr", "coeurl", "fenrir", "bismarck"];

export default function Navbar() {
  return (
    <div className="fixed top-0 z-30 flex w-full flex-col items-center backdrop-blur-xl">
      <div
        style={{ "--i": 2 } as React.CSSProperties}
        className="slide-down flex w-full items-center justify-between px-8 py-4"
      >
        <h1 className="reveal-right rounded-xl py-2 font-serif text-6xl">
          The Crystarium
        </h1>
        <nav className="flex gap-10 font-serif text-2xl text-sky-800">
          {navItems.map((item, i) => (
            <li
              key={i}
              style={
                {
                  "--i": i + 3,
                  "--slide-direction": "slide-down",
                } as React.CSSProperties
              }
              className="slide cursor-pointer list-none rounded-lg border border-transparent px-6 py-1 transition-all duration-500 hover:border-sky-800/40"
            >
              {item}
            </li>
          ))}
        </nav>
      </div>
      <div className="line" />
    </div>
  );
}
