"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Token, useAssets } from "@/hooks/useAssets";
import { ChainInfo, useChains } from "@/hooks/useChains";
import React from "react";
import { Virtuoso } from "react-virtuoso";

const ListItem: React.FC<{ chain: ChainInfo }> = ({ chain }) => {

  // As if a token has no logo, its ofc not worth displaying
  if(!chain.logoURI) {
    return null
  }
  return (
    <div
      className="flex flex-row justify-between p-2 py-4 border-t-2"
      key={chain.id}
    >
      <div className="flex flex-row gap-2">
        <img className="w-6 h-6" src={chain.logoURI} alt={chain.name} />
        <span>{chain.name}</span>
      </div>
    </div>
  );
};

export const SelectChain = () => {
  const { chains, isLoading, error } = useChains();

  return (
    <Popover>
      <PopoverTrigger>Chain</PopoverTrigger>
      <PopoverContent>
        <div className="h-[25rem] flex flex-col gap-4 items-start">
          <header>Select Chain</header>

          <div className="w-full h-full">
            <Virtuoso
              className="w-full h-full"
              data={chains}
              itemContent={(index, chain) => <ListItem key={index} chain={chain} />}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
