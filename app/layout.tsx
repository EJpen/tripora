import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingChat } from "@/components/layout/FloatingChat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripora - Discover Your Next Amazing Journey",
  description: "A premium travel agency offering unforgettable adventures and personalized travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingChat />
        </div>
      </body>
    </html>
  );
}
