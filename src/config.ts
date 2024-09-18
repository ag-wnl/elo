"use client"
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import {
  metaMaskWallet,
  phantomWallet,
  coinbaseWallet,
  braveWallet,
  okxWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        braveWallet,
        phantomWallet,
        coinbaseWallet,
        okxWallet,
        walletConnectWallet
      ],
    },
  ],
  {
    appName: "elo",
    projectId: "project-id-1",
  }
);

export const wagmiConfig = createConfig({
  chains: [mainnet, base],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
  connectors,
  ssr: true,
});