import { ethers } from "ethers"
import { BscscanProvider } from "@ethers-ancillary/bsc";
import { createContext, useContext, useEffect, useState } from "react"
import Web3Modal from 'web3modal'

const web3UserContext = createContext()

const web3UserProvider = () => {

  const [initialized, setInitialized] = useState(false);
  const [provider, setProvider] = useState();
  const [userAddress, setUserAddress] = useState([]);
  console.log(initialized);

  function updateProvider(_provider) {
    setProvider(_provider);
    console.log("PROVIDER: ", _provider);
  }

  async function getUserAddress() {
    //if (provider.connection.url.startsWith("http")) return
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    //const accounts = await provider.send("eth_requestAccounts", [])
    setUserAddress(accounts[0]);
    console.log({ account: accounts });
  }

  function setInitialProvider() {

    const ethereum = window.ethereum
    console.log(ethereum);
    const web3Modal = new Web3Modal({
      network: "bsc-testnet", // optional
      disableInjectedProvider: true, // optional
      cacheProvider: true, // optional
      providerOptions: {}, // required
    });
    const provider = new ethers.providers.Web3Provider(connection)

    if (!ethereum) {
      updateProvider(new ethers.providers.Web3Provider(connection))
      //updateProvider(new ethers.providers.JsonRpcProvider("http://localhost:7545"))
      return
    } else {
      ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts)
      })
      updateProvider(new ethers.providers.Web3Provider(ethereum))
    }
  }

  useEffect(() => {
    setInitialProvider()
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) getUserAddress()
  }, [initialized])

  const variables = { provider, userAddress }
  const functions = { setUserAddress, getUserAddress }

  const value = { ...variables, ...functions }

  return initialized ? <web3UserContext.Provider value={value} {...props} /> : null
}

export const useWeb3UserProvider = () => {
  return useContext(web3UserContext)
}

export default web3UserProvider

// WHEN METRAMASK IS SET TO WRONG NETWORK contact.messge() errors out