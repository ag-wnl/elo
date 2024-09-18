"use client";
import axios from "axios"
import useSWR from "swr";

export type Token = {
  chainId: number;
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  priceUSD?: string;
  coinKey: string;
  logoURI?: string;
};

export const useAssets = () => {
  const { data, error, isLoading } = useSWR(
    ['https://li.quest/v1/tokens', 'somekey'], 
    async () => {
      const result = await axios.get('https://li.quest/v1/tokens', {
        // params: { chainTypes },
      });
      return result.data.tokens as Record<string, Token[]>;
    }
  );
  return {
    tokenRecord: data ?? {},
    error,
    isLoading,
  };
};