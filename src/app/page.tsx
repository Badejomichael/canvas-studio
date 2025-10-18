"use client";
import { motion } from "framer-motion";
import PreviewCanvas, { TraitSet } from "@/components/PreviewCanvas";
import TraitCarousel from "@/components/TraitCarousel";
import { useState, useMemo } from "react";

export default function Page() {
  const [traits, setTraits] = useState<TraitSet>({
    background: "/traits/backgrounds/bg1.png",
    body: "/traits/bodies/body1.png",
    hair: null,
    bandana: null,
    jacket: null,
    grin: null,
    accessory: null,
  });

  const bgBlurImages = useMemo(
    () => ["/branding/sample1.png", "/branding/sample2.png", "/branding/sample3.png"],
    []
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6">
      {/* Blurred NFT Backgrounds */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-30 blur-[60px]">
        {bgBlurImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Canvas NFT Background"
            className="w-[500px] h-[500px] object-cover rounded-2xl absolute"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: 0.8,
              rotate: i * 2,
              x: [0, i * 30, 0],
              y: [0, i * 15, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl 
          flex flex-col lg:flex-row gap-12 
          w-full max-w-6xl p-6 sm:p-8 rounded-2xl
          md:rounded-2xl
          md:max-h-none
          md:relative
          md:overflow-visible
          md:border-white/10
          md:bg-white/5
          md:shadow-2xl
          /* --- Mobile full-screen glass --- */
          sm:max-w-6xl
          max-sm:inset-0 max-sm:rounded-none max-sm:p-6 
          max-sm:border-none max-sm:overflow-y-auto max-sm:bg-white/10
        "
      >
        {/* Left: PFP Preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <PreviewCanvas traits={traits} />
        </div>

        {/* Right: Trait Selectors */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <TraitCarousel
            title="Background"
            items={["/traits/backgrounds/bg1.png"]}
            selected={traits.background}
            onSelect={(src) => setTraits((t) => ({ ...t, background: src }))}
          />
          <TraitCarousel
            title="Body"
            items={["/traits/bodies/body1.png"]}
            selected={traits.body}
            onSelect={(src) => setTraits((t) => ({ ...t, body: src }))}
          />
          <TraitCarousel
            title="Hair"
            items={["/traits/hairs/hair1.png"]}
            selected={traits.hair}
            onSelect={(src) => setTraits((t) => ({ ...t, hair: src }))}
          />
          <TraitCarousel
            title="Bandana"
            items={["/traits/bandanas/bandana1.png"]}
            selected={traits.bandana}
            onSelect={(src) => setTraits((t) => ({ ...t, bandana: src }))}
          />
          <TraitCarousel
            title="Jacket"
            items={["/traits/jackets/jacket1.png"]}
            selected={traits.jacket}
            onSelect={(src) => setTraits((t) => ({ ...t, jacket: src }))}
          />
          <TraitCarousel
            title="Grin"
            items={["/traits/grins/grin1.png"]}
            selected={traits.grin}
            onSelect={(src) => setTraits((t) => ({ ...t, grin: src }))}
          />
          <TraitCarousel
            title="Accessory"
            items={["/traits/accessories/fish1.png"]}
            selected={traits.accessory}
            onSelect={(src) => setTraits((t) => ({ ...t, accessory: src }))}
          />
        </div>
      </motion.div>
    </div>
  );
}
