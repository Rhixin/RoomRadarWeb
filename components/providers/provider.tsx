"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { NavbarProvider } from "./navbarprovider";
import { MapProvider } from "./mapprovider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MapProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </MapProvider>
    </SessionProvider>
  );
}
