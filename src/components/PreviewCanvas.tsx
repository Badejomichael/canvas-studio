"use client";
import React, { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi"; // <-- new import

export type TraitSet = {
  background: string;
  body: string;
  hair: string;
  bandana: string;
  jacket: string;
  grin: string;
  accessory: string;
};

type Props = {
  size?: number;
  traits: TraitSet;
  className?: string;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (!src) return reject(new Error("Empty src"));
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
}

async function drawStack(
  ctx: CanvasRenderingContext2D,
  size: number,
  order: string[]
) {
  ctx.clearRect(0, 0, size, size);
  for (const src of order) {
    if (!src) continue;
    try {
      const img = await loadImage(src);
      ctx.drawImage(img, 0, 0, size, size);
    } catch (e) {
      // Skip failed images silently
    }
  }
}

export default function PreviewCanvas({ size = 512, traits, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const renderOrder = [
    traits.background,
    traits.body,
    traits.jacket,
    traits.hair,
    traits.bandana,
    traits.grin,
    traits.accessory,
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    (async () => {
      await drawStack(ctx, size, renderOrder);
      if (cancelled) return;
    })();

    return () => {
      cancelled = true;
    };
  }, [traits, size]);

  const handleMint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "canvas-studio-pfp.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="w-[320px] h-[320px] md:w-[512px] md:h-[512px] rounded-xl shadow-2xl border border-white/10 bg-white/5"
      />

      <div className="mt-4 flex justify-center">
        <button
          onClick={handleMint}
          className="
            flex items-center gap-2
            px-5 py-2.5
            bg-gradient-to-r from-violet-500 to-fuchsia-600
            hover:from-violet-600 hover:to-fuchsia-700
            rounded-full font-semibold text-sm text-white
            shadow-lg hover:shadow-fuchsia-500/30
            transition-all duration-300 active:scale-95
          "
        >
          <FiDownload className="w-4 h-4" />
          Mint
        </button>
      </div>
    </div>
  );
}
