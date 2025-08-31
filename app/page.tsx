import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-between px-12 lg:px-24 h-[calc(100vh-130px)] max-w-7xl mx-auto gap-12">

      {/* Left */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-6xl font-extrabold tracking-tighter leading-tight text-foreground">
          Master the Board, <br />
          <span className="text-[#A54E18]">Own the Game.</span>
        </h1>

        <p className="text-lg text-foreground/70 max-w-md">
          Experience the ultimate professional chess laboratory.
          Analyze, play, and improve your skills in a distraction free environment.
        </p>

        <div>
          <Link
            href="/chess"
            className="inline-block bg-foreground text-background text-lg px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Play Now
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 relative h-[500px] w-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden">
        <Image
          src="/assets/hero/chessboard.png"
          alt="Chess Board"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
}