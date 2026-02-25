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
      <div className="mt-6 rounded-xl bg-amber-900/30 border border-amber-700/40 p-5 text-center">
        <p className="text-amber-200 text-lg font-semibold">
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
    <div className="mt-6 rounded-xl bg-amber-900/30 border border-amber-700/40 p-5">
      <p className="text-amber-400/80 text-xs uppercase tracking-widest mb-3 text-center">
        Add this much water
      </p>

      <div className="text-center mb-4">
        <span className="text-4xl font-bold text-amber-100">
          {waterOz.toFixed(2)}
        </span>
        <span className="text-amber-400 text-lg ml-2">oz</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <div className="text-amber-100 font-semibold text-lg">
            {waterTsp < 0.1 ? waterTsp.toFixed(2) : waterTsp.toFixed(1)}
          </div>
          <div className="text-amber-400/60 text-xs">teaspoons</div>
        </div>
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <div className="text-amber-100 font-semibold text-lg">
            {waterMl < 1 ? waterMl.toFixed(2) : waterMl.toFixed(1)}
          </div>
          <div className="text-amber-400/60 text-xs">mL</div>
        </div>
      </div>

      {isJustDrops && (
        <p className="text-amber-400/70 text-xs text-center mt-3 italic">
          That&apos;s roughly {Math.round(waterDrops)} drops — just a tiny splash
        </p>
      )}

      <div className="mt-4 pt-3 border-t border-amber-700/30 text-center">
        <span className="text-amber-400/60 text-xs">Final volume: </span>
        <span className="text-amber-200 text-sm font-medium">
          {finalVolumeOz.toFixed(2)} oz
        </span>
      </div>
    </div>
  );
}
