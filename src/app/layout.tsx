import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canvas Studio — NFT PFP Generator",
  description: "A community-driven NFT avatar generator by Canvas Studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0810] text-white overflow-x-hidden antialiased">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <Image
                src="/branding/logo.png"
                alt="Canvas Studio Logo"
                width={42}
                height={42}
                className="rounded-md"
              />
              <h1 className="text-2xl font-bold tracking-tight">
                Canvas <span className="text-violet-400">Studio</span>
              </h1>
            </div>

            {/* Desktop Button */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
                target="_blank"
                className="bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 py-2 rounded-lg font-medium shadow-lg hover:opacity-90 transition"
              >
                Suggest Trait
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="pt-[100px] relative min-h-screen">{children}</main>

        {/* Floating Mobile Button */}
        <Link
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          className="sm:hidden fixed bottom-6 right-6 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Suggest Trait
        </Link>

        {/* FOOTER */}
        <footer className="text-center py-6 text-white/50 text-sm">
          © {new Date().getFullYear()} Canvas Studio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
