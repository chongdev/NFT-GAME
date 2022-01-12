import React, { useEffect, useState } from "react";
// import Web3 from "web3";
// import Web3Modal from "web3modal";


// const providerOptions = {
//   /* See Provider Options Section */
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

// const provider = await web3Modal.connect();
// const web3 = new Web3(provider);

// console.log( web3 );

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {

  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
      //     method: "eth_requestAccounts"
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}

function onAddressChanged(onConnected) {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      // console.log(accounts);
      // selectedAccount = accounts[0];
      // console.log(`Selected account changed to ...`, accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);
        return;
      }
    });
  }
}

async function disconnect() {
  console.log("disconnect");

  if (window.confirm("Do you want to logout?") === true) {
    // const clear = await web3Modal.clearCachedProvider();
    // console.log(clear);
  }

  // window.ethereum.on('accountsChanged', async () => {
  //   // Do something

  //   console.log('disconnect...');
  // });
}

export default function MetaMaskAuth() {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    onAddressChanged(setUserAddress);
  }, []);

  return userAddress ? (
    <Address userAddress={userAddress} />
  ) : (
    <Connect setUserAddress={setUserAddress} />
  );
}

function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
        {" "}
        <button className="bbtn"> Connect to MetaMask </button>{" "}
      </a>
    );
  }

  return (
    <button className="bbtn" onClick={() => connect(setUserAddress)}>
      Connect to MetaMask{" "}
    </button>
  );
}

function Address({ userAddress }) {
  return (
    <div>
      <button className="bbtn">
        {" "}
        {userAddress.substring(0, 5)}…{" "}
        {userAddress.substring(userAddress.length - 4)}{" "}
      </button>

      <button className="bbtn" onClick={() => disconnect()}><span>Logout</span></button>
    </div>
  );
}
