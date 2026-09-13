import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickDrop — Fast Delivery",
  description:
    "A fast animated delivery advertisement powered by Xypher Tech Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}