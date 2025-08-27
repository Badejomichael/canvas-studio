import type { Metadata } from "next";
import "./globals.css";

import canvasLogo from "@/assests/logo.jpg";

export const metadata: Metadata = {
  title: "Canvas Studio",
  description: "Canvas Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
        {children}
      </body>
    </html>
  );
}