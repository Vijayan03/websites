import type { Metadata } from "next";
import { Inter, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted via Next.js font system — no external CDN request, no layout shift
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevRatStudio — Digital Innovation Studio",
  description:
    "We design and build premium digital experiences — websites, web apps, mobile apps, UI/UX, and brand strategy for forward-thinking companies.",
  keywords: [
    "web development",
    "mobile app",
    "UI/UX design",
    "brand strategy",
    "digital studio",
    "DevRatStudio",
  ],
  openGraph: {
    title: "DevRatStudio — Digital Innovation Studio",
    description: "Premium digital experiences crafted for global impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
