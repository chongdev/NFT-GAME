import Layout from "../src/components/Layout";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

import detectEthereumProvider from '@metamask/detect-provider';

export default function MyInventory() {

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    const provider = await detectEthereumProvider();

    // if (provider) {
    //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa!');
    //   return // startApp(provider); // Initialize your app
    // } else {
    //   console.log('Please install MetaMask!');
    // }

    ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });

    let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    // Do any other work!
  }
}


const chainId = await ethereum.request({ method: 'eth_chainId' });
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
}
// // //     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
// // //     // Prompt user for account connections
// // //     await provider.send("eth_requestAccounts", []);
// // //     const signer = provider.getSigner();
// // //     const accounts1 = await signer.getAddress();

// // // console.log(accounts1)
// // //     const provider2 = new ethers.providers.JsonRpcProvider("https://eth-ropsten.alchemyapi.io/v2/hAoIHoQ7U_1lTHKyffQof7r29tIKHvt2");

// // //     const signature = await signer.signMessage("Hello World");

    // // if (!ethereum) {
    // //     console.log("Make sure you have metamask!");
    // //     return;
    // // } else {
    // //     console.log("We have the ethereum object", ethereum);
    // // }

    //const accounts = await provider.send("eth_requestAccounts", [])
    // // const accounts1 = await ethereum.request({ method: 'eth_requestAccounts' });
    // // const accounts2 = await ethereum.request({ method: 'eth_accounts' });

    // // if (accounts.length !== 0) {
    // //     const account = accounts[0];
    // //     console.log("Found an authorized account:", account);
    // //     setCurrentAccount(account)

    // //     // Setup listener! This is for the case where a user comes to our site
    // //     // and ALREADY had their wallet connected + authorized.
    // //     //setupEventListener()
    // // } else {
    // //     console.log("No authorized account found")
    // // }


  // let show_account_addr = ""
  // async function connectWallet() {
  //   const { active, account, activate, deactivate } = useWeb3React();
  //   show_account_addr = show_account_addr + account + "";
  //   show_account_addr = show_account_addr.substring(0, 5) + "..." + show_account_addr.substring(show_account_addr.length - 4, show_account_addr.length);
  //   try {
  //     await activate(injected);
  //   } catch (err) {
  //     console.error(err);
  //   }
  }
  
  
  return (
    <Layout>
      <div className="text-secondary">
        <h1>My Inventory</h1>
        <div>
          <button className="btn btn btn-light me-2 px-2 btn-sm" onClick={checkIfWalletIsConnected}>
            connectWallet
          </button> 
        </div>
      </div>
    </Layout>
  );

}
