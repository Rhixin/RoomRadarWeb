import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/provider";

export const metadata: Metadata = {
  title: "Room Radar",
  description: "Boarding House Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
