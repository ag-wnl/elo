"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from "@/components/header";
import { SwapPanel } from "@/components/swap";
import { wagmiConfig } from "@/config";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

export default function Home() {
  const client = new QueryClient();

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider
          theme={darkTheme()}
          appInfo={{
            appName:"elo"
          }}
          >
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
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
