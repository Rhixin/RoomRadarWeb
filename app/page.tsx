"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.replace("/home");
  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-2 border p-5 hover:bg-gray-50 transition-colors"
      >
        <FcGoogle className="text-xl" />
        Log In with Google
      </button>
    </div>
  );
}
