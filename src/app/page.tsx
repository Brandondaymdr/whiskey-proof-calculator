import Image from "next/image";
import ProofCalculator from "./components/ProofCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Top Bar */}
      <div className="bg-wt-red text-white text-center py-2 px-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em]">
          Eleanor Batch 19 A/B Release
        </p>
      </div>

      {/* Header */}
      <header className="pt-4 pb-6 px-4 text-center flex flex-col items-center">
        {/* Crowded Barrel Round Logo */}
        <div className="relative w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[12.5rem] mb-2">
          <Image
            src="/crowded-barrel-round.png"
            alt="Crowded Barrel Whiskey Co."
            fill
            className="object-contain"
            sizes="(max-width: 768px) 160px, 200px"
            priority
          />
        </div>

        {/* Eleanor Title */}
        <h1 className="font-[family-name:var(--font-blackletter)] text-5xl md:text-7xl text-white tracking-wide">
          Eleanor
        </h1>

        <p className="text-neutral-400 text-sm font-semibold uppercase tracking-[0.2em] mt-1">
          Straight Bourbon Whiskey
        </p>
        <div className="w-16 h-0.5 bg-wt-red mx-auto mt-4" />
        <p className="text-neutral-500 text-sm mt-4 max-w-md mx-auto font-medium">
          Slide to your desired proof and we&apos;ll tell you how much water to
          add
        </p>
      </header>

      {/* Calculator Grid */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProofCalculator
            batchName="Batch 19A"
            startingProof={114.8}
            bottleImage="/eleanor-19a.jpg"
            accentColor="purple"
          />
          <ProofCalculator
            batchName="Batch 19B"
            startingProof={116.4}
            bottleImage="/eleanor-19b.jpg"
            accentColor="gold"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-wt-dark text-center py-6 px-4 mt-12">
        <p className="text-neutral-400 text-xs font-bold uppercase tracking-[0.2em]">
          Crowded Barrel Whiskey Co.
        </p>
        <p className="text-neutral-600 text-xs mt-1">
          Eleanor Batch 19 A/B Release
        </p>
      </footer>
    </div>
  );
}
