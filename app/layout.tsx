import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingButtons from "./components/home/FloatingButtons";

import Footer from "./components/home/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AstroAlert from "./components/AstroAlert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Krishna Sai | Professional Astrology Services",
  description: "Expert astrology consultations, pooja services, and spiritual guidance by Master Krishna Sai. Discover your path through Vedic astrology.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop/>

        <FloatingButtons />
        <AstroAlert/>
        {/* <Banner /> */}
        <Header  />
        <main className="pt-[header-height]">
  {children}
</main>

<Footer/>
      </body>
    </html>
  );
}
