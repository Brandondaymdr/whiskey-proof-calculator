"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import WaterResult from "./WaterResult";

interface ProofCalculatorProps {
  batchName: string;
  startingProof: number;
  bottleImage: string;
  accentColor: "purple" | "gold";
}

const POUR_SIZES = [
  { label: "1/2 oz", value: 0.5 },
  { label: "1 oz", value: 1.0 },
  { label: "1 1/2 oz", value: 1.5 },
];

const MIN_PROOF = 80;

export default function ProofCalculator({
  batchName,
  startingProof,
  bottleImage,
  accentColor,
}: ProofCalculatorProps) {
  const [pourSize, setPourSize] = useState(1.0);
  const [desiredProof, setDesiredProof] = useState(
    Math.round(startingProof - 14)
  );

  const waterToAdd = useMemo(() => {
    if (desiredProof >= startingProof) return 0;
    return (pourSize * (startingProof - desiredProof)) / desiredProof;
  }, [pourSize, startingProof, desiredProof]);

  const finalVolume = pourSize + waterToAdd;

  const accentStyles = {
    purple: {
      selectedBg: "bg-purple-600",
      selectedText: "text-white",
      proofBadge: "bg-purple-900/40 border-purple-500/30 text-purple-200",
      headerColor: "text-purple-300",
      sealLabel: "Purple Seal",
    },
    gold: {
      selectedBg: "bg-yellow-600",
      selectedText: "text-black",
      proofBadge: "bg-yellow-900/40 border-yellow-500/30 text-yellow-200",
      headerColor: "text-yellow-300",
      sealLabel: "Gold Seal",
    },
  };

  const styles = accentStyles[accentColor];

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Bottle Image */}
      <div className="relative w-44 h-64 md:w-52 md:h-72 mb-4 rounded-xl overflow-hidden bg-gradient-to-b from-neutral-200 to-neutral-100 shadow-lg shadow-black/40">
        <Image
          src={bottleImage}
          alt={`Eleanor ${batchName}`}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 176px, 208px"
          priority
        />
      </div>

      {/* Batch Name */}
      <h2
        className={`text-lg font-extrabold uppercase tracking-[0.15em] ${styles.headerColor} mb-1`}
      >
        {batchName}
      </h2>
      <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-2">
        {styles.sealLabel}
      </p>

      {/* Starting Proof Badge */}
      <div
        className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-bold mb-5 ${styles.proofBadge}`}
      >
        {startingProof} Proof
      </div>

      {/* Calculator Card */}
      <div className="w-full bg-wt-dark/80 backdrop-blur-sm rounded-xl border border-neutral-700/40 p-5 space-y-5">
        {/* Pour Size Selector */}
        <div>
          <label className="block text-neutral-400 text-xs font-bold uppercase tracking-[0.15em] mb-2">
            Pour Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {POUR_SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => setPourSize(size.value)}
                className={`py-2.5 px-3 rounded-lg text-sm font-bold transition-all duration-150 ${
                  pourSize === size.value
                    ? `${styles.selectedBg} ${styles.selectedText} shadow-lg`
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desired Proof Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-neutral-400 text-xs font-bold uppercase tracking-[0.15em]">
              Desired Proof
            </label>
            <span className="text-white font-extrabold text-lg tabular-nums">
              {desiredProof}
            </span>
          </div>
          <input
            type="range"
            min={MIN_PROOF}
            max={startingProof}
            step={1}
            value={desiredProof}
            onChange={(e) => setDesiredProof(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-neutral-700"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1 font-semibold">
            <span>{MIN_PROOF}</span>
            <span>{startingProof}</span>
          </div>
        </div>

        {/* Results */}
        <WaterResult
          waterOz={waterToAdd}
          finalVolumeOz={finalVolume}
          desiredProof={desiredProof}
          startingProof={startingProof}
        />
      </div>
    </div>
  );
}
