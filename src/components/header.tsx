import { ConnectButton } from "@rainbow-me/rainbowkit"


export const Header = () => {
  return (
    <header className="flex flex-row w-full items-center justify-between max-md:px-10 px-20 py-10">
      <span className="text-2xl font-bold">
        elo swap
      </span>

      <div className="text-md cursor-pointer">
        Swap
      </div>
      <ConnectButton label="Connect" chainStatus="icon" showBalance={false}/>
    </header>
  )
}