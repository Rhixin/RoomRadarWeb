"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { NavbarProvider } from "./navbarprovider";
import { MapProvider } from "./mapprovidder";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </SessionProvider>
  );
}
