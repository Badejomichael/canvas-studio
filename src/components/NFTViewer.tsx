"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRandom, FaDownload } from "react-icons/fa";

// Import NFTs (replace with your actual filenames)
import nft1 from "@/assests/nft1.jpg";
import nft2 from "@/assests/nft2.jpg";
import nft3 from "@/assests/nft3.jpg";

const nftImages = [nft1, nft2, nft3];

const NFTViewer: React.FC = () => {
  const [current, setCurrent] = useState(nftImages[0]);

  const randomize = () => {
    const random = Math.floor(Math.random() * nftImages.length);
    setCurrent(nftImages[random]);
  };

  const download = () => {
    const link = document.createElement("a");
    link.download = "canvas-nft.png";
    link.href = current.src;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full">
      {/* NFT Preview */}
      <motion.div
        key={current.src}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md border-2 border-purple-500/60 rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-black shadow-[0_0_25px_rgba(168,85,247,0.6)]"
      >
        <img
          src={current.src}
          alt="NFT Preview"
          className="w-full h-auto object-contain rounded-xl"
        />
      </motion.div>

      {/* NFT Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {nftImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(img)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              current.src === img.src
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-white/10 text-purple-300 hover:bg-white/20"
            }`}
          >
            NFT {idx + 1}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-md"
      >
        <button
          onClick={randomize}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/40 transition-all text-sm sm:text-base"
        >
          <FaRandom /> Randomize
        </button>
        <button
          onClick={download}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-green-400/40 transition-all text-sm sm:text-base"
        >
          <FaDownload /> Download
        </button>
      </motion.div>
    </div>
  );
};

export default NFTViewer;
