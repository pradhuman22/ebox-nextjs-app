import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "ebox",
  description: "Discover and organize the memorable events effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={raleway.variable}>
      <body className="w-full relative antialiased">{children}</body>
    </html>
  );
}
