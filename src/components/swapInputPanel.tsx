"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { useSwapContext } from "@/context/SwapContext"


export const SwapInputPanel = () => {

  const { sellAmount, setSellAmount } = useSwapContext()

  return (
    <div>
      <Card>
        <CardContent className="p-3 space-y-3">
          <Input
            type="text"
            placeholder="0"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
            className="text-3xl font-bold border-none"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$21.02</span>
            <span>Balance: 0.01034 ETH</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}