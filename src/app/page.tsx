"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import NFTViewer from "@/components/NFTViewer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <Background />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="relative max-w-3xl w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.6)] p-8 md:p-12 flex flex-col items-center">
          <NFTViewer />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
