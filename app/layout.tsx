import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Forge Digital | SEO & AI Growth Agency",
  description: "Grow your business with modern SEO, AI-powered websites, local search optimization, and intelligent digital marketing.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Local Forge Digital", description: "Build visibility. Forge growth.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
