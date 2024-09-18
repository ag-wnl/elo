"use client"

import { ChevronDown, RotateCcw, Settings } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { SelectAsset } from "./selectAsset"
import { SelectChain } from "./selectChain"
import { SwapsProvider } from "@/context/SwapContext"
import { SwapInputPanel } from "./swapInputPanel"
import { SwapOutputPanel } from "./swapOutputPanel"

export const SwapPanel = () => {
  return (
    <SwapsProvider>
    <main>
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Swap</CardTitle>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Reset</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>From</span>
              <SelectAsset />
              <SelectChain />
              <span className="flex items-center">
                0x7ae...1bb <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
              </span>
            </div>
            
            <SwapInputPanel />
          </div>
          
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>To</span>
              <span className="flex items-center">
                celes...r7e <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
              </span>
            </div>
            
            <SwapOutputPanel />

          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-4">
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">0.00006977 ETH</span>
            </div>
            <Label htmlFor="airplane-mode" className="text-xs text-muted-foreground">Estimated fee</Label>
          </div>
          
          <Button className="w-full">Submit</Button>
          
          <div className="w-full text-center text-sm text-muted-foreground">
            Powered by Squid + Axelar
          </div>
        </CardFooter>
      </Card>
    </main>
    </SwapsProvider>
  )
}