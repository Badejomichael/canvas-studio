import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
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
        {/* Toast notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1a1a2f",
              color: "#fff",
              border: "1px solid rgba(147,51,234,0.4)",
              fontFamily: "Space Grotesk, sans-serif",
            },
            success: {
              iconTheme: {
                primary: "#a855f7",
                secondary: "#1a1a2f",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
