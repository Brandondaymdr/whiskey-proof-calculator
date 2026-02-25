import ProofCalculator from "./components/ProofCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0d0a]">
      {/* Header */}
      <header className="pt-8 pb-4 px-4 text-center">
        <p className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-2">
          Crowded Barrel Whiskey Co.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-50 tracking-tight">
          Eleanor
        </h1>
        <p className="text-amber-400/70 text-sm mt-1">
          Straight Bourbon Whiskey
        </p>
        <div className="w-16 h-px bg-amber-700/50 mx-auto mt-4" />
        <p className="text-neutral-400 text-sm mt-4 max-w-md mx-auto">
          Slide to your desired proof and we&apos;ll tell you how much water to
          add
        </p>
      </header>

      {/* Calculator Grid */}
      <main className="max-w-4xl mx-auto px-4 py-8">
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
      <footer className="text-center py-8 px-4 border-t border-neutral-800/50">
        <p className="text-neutral-500 text-xs">
          Crowded Barrel Whiskey Co. &mdash; Eleanor Batch 19 A/B Release
        </p>
      </footer>
    </div>
  );
}
