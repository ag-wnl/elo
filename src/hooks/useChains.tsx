"use client";
import axios from "axios"
import useSWR from "swr";

type NativeCurrency = {
  name: string;
  symbol: string;
  decimals: number;
};

// Define the type for metamask related properties
type Metamask = {
  chainId: string;
  blockExplorerUrls: string[];
  chainName: string;
  nativeCurrency: NativeCurrency;
  rpcUrls: string[];
};

// Define the main type for the chain information
export type ChainInfo = {
  key: string;
  chainType: string; // E.g., "EVM"
  name: string;
  coin: string; // E.g., "ETH"
  id: number;
  mainnet: boolean;
  logoURI: string;
  tokenlistUrl: string;
  multicallAddress: string;
  metamask: Metamask;
};

export const useChains = () => {
  const { data, error, isLoading } = useSWR(
    ['https://li.quest/v1/chains', 'somekey'], 
    async () => {
      const result = await axios.get('https://li.quest/v1/chains', {
        // params: { chainTypes },
      });
      return result.data.chains as ChainInfo[];
    }
  );

  return {
    chains: data,
    error,
    isLoading,
  };
};