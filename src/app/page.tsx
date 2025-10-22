"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main
      className={`relative min-h-screen flex items-center justify-center overflow-hidden`}
      style={{ fontFamily: "Space Grotesk", }}
    >
      {/* === Animated background gradient === */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-[#080c16] via-[#0d0f1f] to-[#150c25] bg-[length:200%_200%] -z-20"
        aria-hidden="true"
      />

      {/* === Glowing background aura === */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -z-10 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-700/30 via-indigo-600/20 to-transparent blur-[150px]"
      />

      {/* === Blurred PFPs (background decor, floating) === */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-80px] left-[-80px] rotate-[-12deg] opacity-30 blur-2xl -z-10"
      >
        <Image
          src="/landing-imgs/pfp1.png"
          alt="PFP background 1"
          width={420}
          height={420}
          className="rounded-3xl object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-80px] right-[-80px] rotate-[10deg] opacity-25 blur-2xl -z-10"
      >
        <Image
          src="/landing-imgs/pfp2.png"
          alt="PFP background 2"
          width={420}
          height={420}
          className="rounded-3xl object-cover"
        />
      </motion.div>

      {/* === Main hero content === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center max-w-2xl z-10"
      >
        {/* === Circular glowing logo (breathing aura) === */}
        <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
          {/* Animated glow aura */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-[90px]"
          />
          {/* Inner ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1b1530] to-[#0f1024] border border-purple-700/30 shadow-[0_0_30px_rgba(124,58,237,0.3)]" />
          {/* Circular logo */}
          <Image
            src="/canvas-logo.png"
            alt="Canvas logo"
            width={120}
            height={120}
            className="relative z-10 rounded-full object-cover border-2 border-purple-600/30 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          />
        </div>

        {/* === Title with shimmer on “Studio” === */}
        <h1 className="text-5xl sm:text-6xl font-semibold text-white leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.08)]">
          Canvas{" "}
          <motion.span
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
          >
            Studio
          </motion.span>
        </h1>

        {/* === Subtitle === */}
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed">
          Dive into Web3 artistry — where{" "}
          <span className="text-purple-400">you</span> are the art.
        </p>

        {/* === CTA button === */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(168,85,247,0.6)" }}
          whileTap={{ scale: 0.96 }}
          className="mt-10"
        >
          <Link href="/studio" passHref legacyBehavior>
            <a
              className="relative inline-block px-10 py-3 rounded-full font-medium text-white
                bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500
                shadow-[0_0_20px_rgba(168,85,247,0.4)]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] 
                transition-all duration-300"
              aria-label="Enter Studio"
            >
              Enter Studio
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
