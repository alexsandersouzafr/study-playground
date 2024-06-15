import { Magic1 } from "./svgs/magic1";
import { Magic2 } from "./svgs/magic2";
export default function Section2() {
  return (
    <section className="relative flex h-screen w-full justify-center overflow-hidden bg-sky-950">
      <MagicCircle />
      <h1 className="mt-32 w-[80%] text-center font-serif text-8xl text-sky-50">
        Believing in Magic will
        <br />
        make you stronger.
      </h1>
    </section>
  );
}

const MagicCircle = () => (
  <div className="absolute bottom-0 left-[50%] flex items-center justify-center">
    <Magic1 className="animate-spin-slow absolute text-sky-700" />
    <Magic2 className="animate-spin-slow-2 absolute text-sky-100" />
  </div>
);
