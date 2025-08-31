"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function AuthButtons() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="bg-foreground text-background px-5 py-2 rounded-md font-medium hover:opacity-90 transition">
          Login
        </button>
      </SignInButton>
    );
  }

  return <UserButton />;
}