"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Retrieve the user session from local storage
    const userSession = JSON.parse(
      localStorage.getItem("userSession") || "null"
    );

    // Redirect to login if no session is found
    if (!userSession) {
      window.location.href = "/";
    }
  }, [router]);

  return <div className="min-h-screen w-full bg-white">{children}</div>;
}
