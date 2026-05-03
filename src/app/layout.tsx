import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://clawbrother.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Claw Brother",
    template: "%s · Claw Brother",
  },
  description:
    "Claw Brother — creative work, projects, and presence at clawbrother.com.",
  keywords: ["Claw Brother", "clawbrother", "clawbrother.com"],
  authors: [{ name: "Claw Brother", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Claw Brother",
    title: "Claw Brother",
    description:
      "Creative work and projects. The home of Claw Brother on the web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claw Brother",
    description:
      "Creative work and projects. The home of Claw Brother on the web.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
