import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Coffee | Premium Craft Coffee & Cozy Atmosphere",
  description: "Experience the best freshly roasted coffee at Lumina Coffee. A cozy space for work, relaxation, and meeting friends. Open daily from 7 AM to 9 PM.",
  keywords: ["coffee shop", "cafe", "espresso", "fresh coffee", "specialty coffee", "local cafe"],
  openGraph: {
    title: "Lumina Coffee | Premium Craft Coffee",
    description: "Experience the best freshly roasted coffee in town. A cozy space for work and relaxation.",
    url: "https://luminacoffee.com",
    siteName: "Lumina Coffee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Lumina Coffee Shop Interior",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Coffee | Premium Craft Coffee",
    description: "Experience the best freshly roasted coffee in town.",
    images: ["https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200"],
  },
  alternates: {
    canonical: "https://luminacoffee.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-stone-800 bg-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
