"use client";

import { useSignIn } from "@/hooks/auth/useSignIn";
import Image from "next/image";

export function Header() {
  const { getSignedInUser } = useSignIn();
  const { signedInUser } = getSignedInUser();

  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 max-w-4xl px-4 mx-auto pt-3">
      <h1 className=" text-xl sm:text-5xl bold">QUICK NOTES</h1>

      <div className="flex gap-3">
        <div>
          <span className="block mb-2">{signedInUser?.displayName}</span>
          <button className="border border-red-300 text-red-300 py-1 px-2 rounded-md hover:bg-red-300 hover:text-black transition-colors">
            Desconectar-se
          </button>
        </div>
        {signedInUser?.photoURL && (
          <Image
            src={signedInUser.photoURL}
            alt="user profile picture"
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
      </div>
    </header>
  );
}
