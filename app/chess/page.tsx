"use client";

import { useEffect, useState } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
import ChessCanvas from "./ChessCanvas";
import ChessUI from "./ChessUI";

type GameStatus = "MATCHING" | "PLAYING";

export default function ChessPage() {
  const { isSignedIn, isLoaded } = useUser();
  const [status, setStatus] = useState<GameStatus>("MATCHING");

  useEffect(() => {
    if (!isSignedIn) return;

    // Temporary matchmaking simulation
    const timer = setTimeout(() => {
      setStatus("PLAYING");
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSignedIn]);

  // Wait until Clerk loads session
  if (!isLoaded) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  // User must login before playing
  if (!isSignedIn) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
        <p className="text-lg">Please sign in to play.</p>
        <SignInButton />
      </div>
    );
  }

  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      {status === "MATCHING" && <ChessUI />}
      {status === "PLAYING" && <ChessCanvas />}
    </div>
  );
}