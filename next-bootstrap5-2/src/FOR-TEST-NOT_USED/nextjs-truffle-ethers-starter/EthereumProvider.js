import { ethers } from "ethers"

import { createContext, useContext, useEffect, useState } from "react"

const EthereumContext = createContext()

const EthereumProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const [provider, setProvider] = useState()
  const [address, setAddress] = useState([])
console.log(initialized)
  function updateProvider(_provider) {
    setProvider(_provider)
    console.log("PROVIDER: ", _provider)
  }

  async function getAddress() {
    //if (provider.connection.url.startsWith("http")) return
    const accounts = await provider.send("eth_requestAccounts", [])
    setAddress(accounts[0])
    console.log({ account: accounts })
  }

  function setInitialProvider() {
    const ethereum = window.ethereum
    if (!ethereum) {
      updateProvider(new ethers.providers.JsonRpcProvider("https://eth-ropsten.alchemyapi.io/v2/hAoIHoQ7U_1lTHKyffQof7r29tIKHvt2"))
      //updateProvider(new ethers.providers.JsonRpcProvider("http://localhost:7545"))
      return
    } else {
      ethereum.on("accountsChanged", function (accounts) {
        setAddress(accounts)
      })
      updateProvider(new ethers.providers.Web3Provider(ethereum))
    }
  }

  useEffect(() => {
    setInitialProvider()
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) getAddress()
  }, [initialized])

  const variables = { provider, address }
  const functions = { setAddress, getAddress }

  const value = { ...variables, ...functions }

  return initialized ? <EthereumContext.Provider value={value} {...props} /> : null
}

export const useEthereum = () => {
  return useContext(EthereumContext)
}

export default EthereumProvider

// WHEN METRAMASK IS SET TO WRONG NETWORK contact.messge() errors out