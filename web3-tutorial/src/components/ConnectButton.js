import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <div>
    <span>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH</span>
    <span>{account &&
        `${account.slice(0, 6)}...${account.slice(
            account.length - 4,
            account.length
        )}`}</span>
        </div>
    ) : ( <button type="button" onClick={handleConnectWallet}>Connect Wallet</button>);
}