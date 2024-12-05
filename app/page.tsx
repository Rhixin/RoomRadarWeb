"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  // If the user is already authenticated, redirect to the home page
  if (session) {
    router.replace("/home");
  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/home" }); // Redirect to /home after successful login
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button className="flex border p-5" onClick={handleGoogleLogin}>
        <FcGoogle />
        Log In with Google
      </button>
    </div>
  );
}
