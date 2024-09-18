import { Token } from '@/hooks/useAssets';
import { ChainInfo } from '@/hooks/useChains';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SwapContextState {
  selectedSourceAsset: Token | null;
  selectedDestinationAsset: Token | null;
  selectedSourceChain: ChainInfo | null;
  selectedDestinationChain: ChainInfo | null;
  setSelectedSourceAsset: React.Dispatch<React.SetStateAction<Token | null>>;
  setSelectedDestinationAsset: React.Dispatch<React.SetStateAction<Token | null>>;
  setSelectedSourceChain: React.Dispatch<React.SetStateAction<ChainInfo | null>>;
  setSelectedDestinationChain: React.Dispatch<React.SetStateAction<ChainInfo | null>>;
  sellAmount: string | undefined;
  buyAmount: string | undefined;
  setSellAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
  setBuyAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
  sourceAssetBalance: string | undefined;
  destinationAssetBalance: string | undefined;
  setSourceAssetBalance: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDestinationAssetBalance: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SwapContext = createContext<SwapContextState | undefined>(undefined);

export const SwapsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSourceAsset, setSelectedSourceAsset] = useState<Token | null>(null);
  const [selectedDestinationAsset, setSelectedDestinationAsset] = useState<Token | null>(null);
  const [selectedSourceChain, setSelectedSourceChain] = useState<ChainInfo | null>(null);
  const [selectedDestinationChain, setSelectedDestinationChain] = useState<ChainInfo | null>(null);
  const [sellAmount, setSellAmount] = useState<string | undefined>(undefined);
  const [buyAmount, setBuyAmount] = useState<string | undefined>(undefined);
  const [sourceAssetBalance, setSourceAssetBalance] = useState<string | undefined>(undefined);
  const [destinationAssetBalance, setDestinationAssetBalance] = useState<string | undefined>(undefined)

  const providerValue = {
    selectedSourceAsset,
    selectedDestinationAsset,
    selectedSourceChain,
    selectedDestinationChain,
    setSelectedSourceAsset,
    setSelectedDestinationAsset,
    setSelectedSourceChain,
    setSelectedDestinationChain,
    sellAmount,
    buyAmount,
    setSellAmount,
    setBuyAmount,
    sourceAssetBalance,
    destinationAssetBalance,
    setSourceAssetBalance,
    setDestinationAssetBalance,
  }

  return (
    <SwapContext.Provider value={providerValue}>
      {children}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => {
  const context = useContext(SwapContext);
  if (context === undefined) {
    throw new Error('useSwapContext must be used within a SwapsProvider');
  }
  return context;
};