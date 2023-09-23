import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "팀 토핑즈",
  description: "상상력을 만드는 사람들",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="dark-theme">
      <body className={inter.className}>
        <Theme appearance="dark">{children}</Theme>
      </body>
    </html>
  );
}
