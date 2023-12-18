"use client";
import Image from "next/image";
import GoogleLogo from "../../../public/google.svg";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center"
    >
      <Image src={GoogleLogo} alt="Google Logo" className="w-6"></Image>
      <span>Sign In with Google</span>
    </button>
  );
}
