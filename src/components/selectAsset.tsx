"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Token, useAssets } from "@/hooks/useAssets";
import React from "react";
import { Virtuoso } from "react-virtuoso";

const ListItem: React.FC<{ token: Token }> = ({ token }) => {

  // As if a token has no logo, its ofc not worth displaying
  if(!token.logoURI) {
    return null
  }
  return (
    <div
      className="flex flex-row justify-between p-2 py-4 border-t-2"
      key={`${token.address}-${token.chainId}-${token.coinKey}`}
    >
      <div className="flex flex-row gap-2">
        <img className="w-6 h-6" src={token.logoURI} alt={token.name} />
        <span>{token.symbol}</span>
      </div>
    </div>
  );
};

export const SelectAsset = () => {
  const { tokenRecord, isLoading, error } = useAssets();
  const selectedChain = "42161";
  const tokensForSelectedChain = tokenRecord[selectedChain];

  return (
    <Popover>
      <PopoverTrigger>Asset</PopoverTrigger>
      <PopoverContent>
        <div className="h-[25rem] flex flex-col gap-4 items-start">
          <header>Select Asset</header>

          <div className="w-full h-full">
            <Virtuoso
              className="w-full h-full"
              data={tokensForSelectedChain}
              itemContent={(index, token) => <ListItem key={index} token={token} />}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
