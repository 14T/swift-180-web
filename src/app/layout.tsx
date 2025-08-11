import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { HERO_IMAGE_URL } from '@/lib/constants';
import './globals.css';

const siteConfig = {
  name: "Swift180",
  url: "https://swift180.com", // Replace with your actual domain
  description: "Swift180 instantly transforms hotel TVs into personalized 4K entertainment hubs with movies, games, AI-powered local guides, and seamless room service integration. Upgrade your guest experience.",
  ogImage: HERO_IMAGE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Revolutionize In-Room Entertainment`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "hotel entertainment",
    "in-room entertainment",
    "4K streaming",
    "travel technology",
    "guest experience",
    "hotel TV system",
    "local travel guide",
    "AI concierge",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // To change the theme, change the data-theme attribute to one of: "teal", "forest", "earth", "sea"
    <html lang="en" className="scroll-smooth" data-theme="sea">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📺</text></svg>" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}