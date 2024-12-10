import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/providers/provider";

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
      {/* <script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8&callback=initialize`}
        async
        defer
      ></script> */}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
