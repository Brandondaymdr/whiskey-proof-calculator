"use client";

interface WaterResultProps {
  waterOz: number;
  finalVolumeOz: number;
  desiredProof: number;
  startingProof: number;
}

export default function WaterResult({
  waterOz,
  finalVolumeOz,
  desiredProof,
  startingProof,
}: WaterResultProps) {
  if (desiredProof >= startingProof) {
    return (
      <div className="mt-5 rounded-lg bg-wt-red/15 border border-wt-red/30 p-5 text-center">
        <p className="text-white text-base font-bold">
          No water needed — enjoy it at barrel proof!
        </p>
      </div>
    );
  }

  const waterTsp = waterOz / 0.1667;
  const waterMl = waterOz * 29.5735;
  const waterDrops = waterMl / 0.05;

  const isJustDrops = waterOz < 0.05;

  return (
    <div className="mt-5 rounded-lg bg-black/40 border border-neutral-700/40 p-5">
      <p className="text-wt-red text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
        Add This Much Water
      </p>

      <div className="text-center mb-4">
        <span className="text-4xl font-extrabold text-white">
          {waterOz.toFixed(2)}
        </span>
        <span className="text-neutral-400 text-lg font-bold ml-2">oz</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-neutral-900/80 rounded-lg p-3 text-center">
          <div className="text-white font-bold text-lg">
            {waterTsp < 0.1 ? waterTsp.toFixed(2) : waterTsp.toFixed(1)}
          </div>
          <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">
            teaspoons
          </div>
        </div>
        <div className="bg-neutral-900/80 rounded-lg p-3 text-center">
          <div className="text-white font-bold text-lg">
            {waterMl < 1 ? waterMl.toFixed(2) : waterMl.toFixed(1)}
          </div>
          <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">
            mL
          </div>
        </div>
      </div>

      {isJustDrops && (
        <p className="text-neutral-500 text-xs text-center mt-3 italic">
          That&apos;s roughly {Math.round(waterDrops)} drops — just a tiny splash
        </p>
      )}

      <div className="mt-4 pt-3 border-t border-neutral-700/40 text-center">
        <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">
          Final volume:{" "}
        </span>
        <span className="text-white text-sm font-bold">
          {finalVolumeOz.toFixed(2)} oz
        </span>
      </div>
    </div>
  );
}
