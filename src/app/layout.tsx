import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canvas Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
