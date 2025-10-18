// components/TraitCarousel.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  items: string[]; // public URL paths for thumbnails
  selected: string;
  onSelect: (src: string) => void;
  thumbSize?: number;
};

export default function TraitCarousel({
  title,
  items,
  selected,
  onSelect,
  thumbSize = 96,
}: Props) {
  return (
    <div className="w-full">
      <h4 className="text-sm text-white/80 mb-2 font-semibold">{title}</h4>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((src) => {
          const active = src === selected;
          return (
            <motion.div
              key={src}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex-shrink-0 rounded-lg p-1 transition-transform ${
                active ? "scale-105 ring-2 ring-violet-400/50" : ""
              }`}
            >
              <button
                onClick={() => onSelect(src)}
                className="block rounded-md overflow-hidden"
                aria-label={`Choose ${title}`}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: thumbSize,
                    height: thumbSize,
                    objectFit: "cover",
                  }}
                  className="bg-white/5 rounded-md"
                />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
