"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import SuggestTraitModal from "@/app/components/SuggestTraitModal";

type CategoryKey =
  | "backgrounds"
  | "base"
  | "hair"
  | "outfits"
  | "eyes"
  | "mouth"
  | "companion"
  | "accessories";

type TraitOption = { id: string; label: string; filename: string };

const TRAITS: Record<CategoryKey, TraitOption[]> = {
  backgrounds: [
    { id: "bg1", label: "Purple", filename: "bg1.png" },
    { id: "bg2", label: "Red", filename: "bg2.png" },
    { id: "bg3", label: "Blue", filename: "bg3.png" },
    { id: "bg4", label: "Brown", filename: "bg4.png" },
    { id: "bg5", label: "Green", filename: "bg5.png" },
    { id: "bg6", label: "Beige", filename: "bg6.png" },
    { id: "bg7", label: "Light Blue", filename: "bg7.png" },
    { id: "bg8", label: "Light Yellow", filename: "bg8.png" },
  ],
  base: [
    { id: "base1", label: "Jellybody", filename: "base1.png" },
    { id: "base2", label: "White", filename: "base2.png" },
    { id: "base3", label: "Black", filename: "base3.png" },
    { id: "base4", label: "Vitiligo", filename: "base4.png" },
    { id: "base5", label: "Revitiligo", filename: "base5.png" },
  ],
  hair: [
    { id: "hair1", label: "Deadlocks", filename: "hair1.png" },
    { id: "hair2", label: "Lowcut", filename: "hair2.png" },
    { id: "hair3", label: "Lowcut Blonde", filename: "hair3.png" },
    { id: "hair4", label: "Conrows", filename: "hair4.png" },
    { id: "hair5", label: "Bubcut", filename: "hair5.png" },
    { id: "hair6", label: "Fringe Cut", filename: "hair6.png" },
    { id: "hair7", label: "Rough I", filename: "hair7.png" },
    { id: "hair8", label: "Rough II", filename: "hair8.png" },
    { id: "hair9", label: "Rowdy", filename: "hair9.png" },

  ],
  outfits: [
    { id: "outfit1", label: "Hawalian Shirt", filename: "outfit1.png" },
    { id: "outfit2", label: "Pink Gradient Shirt", filename: "outfit2.png" },
    { id: "outfit3", label: "Jean Jacket", filename: "outfit3.png" },
    { id: "outfit4", label: "Leather Jacket", filename: "outfit4.png" },
    { id: "outfit5", label: "White Hoodie", filename: "outfit5.png" },
    { id: "outfit6", label: "Black Hoodie", filename: "outfit6.png" },
    { id: "outfit1", label: "Grad Gown", filename: "outfit7.png" },
    { id: "outfit1", label: "Chog Shirt", filename: "outfit8.png" },
    { id: "outfit1", label: "Kntl", filename: "outfit9.png" },
    { id: "outfit1", label: "Black Collar", filename: "outfit10.png" },
    { id: "outfit1", label: "Kimono Pink", filename: "outfit11.png" },
    { id: "outfit1", label: "Kimono Purple", filename: "outfit12.png" },
    { id: "outfit1", label: "Racer Vest", filename: "outfit13.png" },
    { id: "outfit1", label: "Sea Captain", filename: "outfit14.png" },
    { id: "outfit1", label: "Tech Jacket", filename: "outfit15.png" },
    { id: "outfit1", label: "Red Puffer", filename: "outfit16.png" },
    { id: "outfit1", label: "White Puffer", filename: "outfit17.png" },
    { id: "outfit1", label: "Wife Beater", filename: "outfit18.png" },
    { id: "outfit1", label: "Propaganda Shirt", filename: "outfit19.png" },
    { id: "outfit1", label: "PLain Grey Shirt", filename: "outfit20.png" },
  ],
  eyes: [
    { id: "eyes1", label: "Blue Eyes", filename: "eyes1.png" },
    { id: "eyes2", label: "Black Eyes", filename: "eyes2.png" },
    { id: "eyes3", label: "Purple Eyes", filename: "eyes3.png" },
    { id: "eyes4", label: "Glowing Eyes", filename: "eyes4.png" },
    { id: "eyes5", label: "Sukuna Eyes", filename: "eyes5.png" },
    { id: "eyes6", label: "Happy Eyes", filename: "eyes6.png" },
    { id: "eyes7", label: "High Eyes", filename: "eyes7.png" },
    { id: "eyes8", label: "Closed Eyes", filename: "eyes8.png" },
  ],
  mouth: [
    { id: "mouth1", label: "Grin", filename: "mouth1.png" },
    { id: "mouth2", label: "Bubblegum", filename: "mouth2.png" },
    { id: "mouth3", label: "Smoking", filename: "mouth3.png" },
    { id: "mouth4", label: "Tounge out", filename: "mouth4.png" },
    { id: "mouth5", label: "Closed", filename: "mouth5.png" },],
  companion: [
    { id: "pet1", label: "Moyaki", filename: "pet1.png" },
    { id: "pet2", label: "Chog", filename: "pet2.png" },
    { id: "pet3", label: "Molandak", filename: "pet3.png" },
  ],
  accessories: [
    { id: "acc1", label: "Bandana", filename: "acc1.png" },
    { id: "acc1", label: "Glasses", filename: "acc2.png" },
    { id: "acc1", label: "Monhat", filename: "acc3.png" },
    { id: "acc1", label: "Steampunk Goggles", filename: "acc4.png" },
    { id: "acc1", label: "Racer Helment", filename: "acc5.png" },
    { id: "acc1", label: "Butterfly clip", filename: "acc6.png" },
    { id: "acc1", label: "Grad Cap", filename: "acc7.png" },
    { id: "acc1", label: "Cone", filename: "acc8.png" },
    { id: "acc1", label: "Cowboy Hat", filename: "acc9.png" },
    { id: "acc1", label: "Captain", filename: "acc10.png" },
    { id: "acc1", label: "Halo", filename: "acc11.png" },
    { id: "acc1", label: "Snapback", filename: "acc12.png" },
    { id: "acc1", label: "Thuglife Snapback", filename: "acc13.png" },
    { id: "acc1", label: "Fish Beanie", filename: "acc14.png" },
  ],
};

const LAYER_ORDER: CategoryKey[] = [
  "backgrounds",
  "base",
  "hair",
  "outfits",
  "eyes",
  "mouth",
  "companion",
  "accessories",
];

export default function StudioPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const defaults = useMemo(() => {
    const out: Partial<Record<CategoryKey, string>> = {};
    out.backgrounds = TRAITS.backgrounds[0]?.filename ?? "";
    out.base = TRAITS.base[0]?.filename ?? "";
    return out as Record<CategoryKey, string>;
  }, []);

  const [selected, setSelected] = useState<Record<CategoryKey, string>>({
    backgrounds: defaults.backgrounds,
    base: defaults.base,
    hair: "",
    outfits: "",
    eyes: "",
    mouth: "",
    companion: "",
    accessories: "",
  });

  const [openCategory, setOpenCategory] = useState<CategoryKey | null>("backgrounds");

  const SUGGEST_FORM_URL = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";

  function selectTrait(category: CategoryKey, filename: string) {
    setSelected((s) => ({ ...s, [category]: filename }));
  }

  function clearTrait(category: CategoryKey) {
    setSelected((s) => ({ ...s, [category]: "" }));
  }

  async function drawCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 1024;
    canvas.width = size;
    canvas.height = size;

    const loadImg = (src: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        img.src = src;
      });

    ctx.clearRect(0, 0, size, size);
    for (const key of LAYER_ORDER) {
      const filename = selected[key];
      if (!filename) continue;
      const src = `/traits/${key}/${filename}`;
      try {
        const img = await loadImg(src);
        ctx.drawImage(img, 0, 0, size, size);
      } catch (err) {
        console.error("Failed to load", src, err);
      }
    }
  }

  async function mintPFP() {
    await drawCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "canvas-studio-pfp.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#080c16] via-[#0d0f1f] to-[#150c25]`}
      style={{ fontFamily: "Space Grotesk", }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-br from-purple-700/10 via-pink-600/10 to-transparent blur-[200px] -z-10"
      />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 p-1 shadow-lg">
            <Image src="/canvas-logo.png" alt="Canvas" width={36} height={36} className="rounded-full object-cover" />
          </div>
          <div className="text-white font-semibold">
            Canvas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Studio
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow hover:brightness-105 transition"
          >
            + Suggest Traits
          </button>
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left side — PFP preview */}
          <section className="md:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[480px] rounded-2xl bg-gradient-to-b from-[#10121c] to-[#0b0d14] border border-white/10 shadow-xl overflow-hidden"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <canvas ref={canvasRef} width={1024} height={1024} className="hidden" />
                {LAYER_ORDER.map((cat) => {
                  const filename = selected[cat];
                  const src = filename ? `/traits/${cat}/${filename}` : null;
                  return (
                    src && (
                      <motion.img
                        key={cat}
                        src={src}
                        alt={cat}
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )
                  );
                })}
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={mintPFP}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:brightness-110 transition"
            >
              <FiDownload className="w-5 h-5" /> Mint
            </motion.button>

            <p className="mt-4 text-sm text-slate-400 text-center">
              Your live Canvas PFP preview. Customize the traits to your taste.
            </p>
          </section>

          {/* Right side — Trait Picker */}
          <aside className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/3 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold">Customize your Canvas</h2>
              </div>

              <div className="space-y-4">
                {(Object.keys(TRAITS) as CategoryKey[]).map((category) => {
                  const options = TRAITS[category];
                  const isOpen = openCategory === category;
                  return (
                    <div key={category} className="text-white">
                      <button
                        onClick={() => setOpenCategory((prev) => (prev === category ? null : category))}
                        className="w-full flex items-center justify-between py-2 px-2 rounded-md hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                          <span className="capitalize">{category.replace(/s$/, "")}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {selected[category] && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                clearTrait(category);
                              }}
                              className="text-xs bg-white/6 px-2 py-1 rounded-full"
                            >
                              clear
                            </button>
                          )}
                          <svg
                            className={`w-4 h-4 transform transition ${isOpen ? "rotate-180" : "rotate-0"}`}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2"
                          >
                            <div className="flex gap-3 overflow-x-auto py-2">
                              {options.map((opt) => {
                                const src = `/traits/${category}/${opt.filename}`;
                                const active = selected[category] === opt.filename;
                                return (
                                  <div key={opt.id} className="flex flex-col items-center">
                                    <motion.button
                                      whileHover={{ scale: 1.08 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => selectTrait(category, opt.filename)}
                                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                        active ? "border-purple-400 scale-105" : "border-transparent"
                                      } transition-transform`}
                                    >
                                      <img src={src} alt={opt.label} className="w-full h-full object-cover" />
                                    </motion.button>
                                    <div className="text-xs text-slate-300 mt-2">{opt.label}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* Mobile floating Suggest Traits button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
        aria-label="Suggest Traits"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <SuggestTraitModal isOpen={open} onClose={() => setOpen(false)} />
    </motion.div>
  );

}
