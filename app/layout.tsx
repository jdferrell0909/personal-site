import type { Metadata } from "next";
import { Inter } from "next/font/google";
import config from "@/site.config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${config.name} — ${config.tagline}`,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVars = {
    "--site-primary": config.colors.primary,
    "--site-accent": config.colors.accent,
    "--site-accent-dark": config.colors.accentDark,
    "--site-muted": config.colors.muted,
    "--site-light": config.colors.light,
    "--site-border": config.colors.border,
    "--site-background": config.colors.background,
    "--site-foreground": config.colors.foreground,
  } as React.CSSProperties;

  return (
    <html lang="en" style={cssVars}>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
