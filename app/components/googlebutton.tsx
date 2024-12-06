"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function GoogleButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  if (session) {
    router.replace("/home");
  }

  return (
    <button onClick={handleGoogleLogin}>
      <FcGoogle className="text-xl" />
      Log In with Google
    </button>
  );
}
