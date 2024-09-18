"use client"

import { Header } from "@/components/header";
import { SwapPanel } from "@/components/swap";
import { useChains } from "@/hooks/useChains";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Header /> 
      <main className="flex flex-col ">
        <SwapPanel />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>elo, coming soon</a>
        <a>community</a>
        <a>docs</a>
      </footer>
    </div>
    </>
  );
}
