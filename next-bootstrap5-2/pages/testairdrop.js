import Layout from "../src/components/Layout";

import {ethers} from 'ethers'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { BscscanProvider } from "@ethers-ancillary/bsc";

import { BSC, BSCTestnet, Mainnet, DAppProvider } from '@usedapp/core'

//import { TcontractAddress, abi } from '../contracts/THTESTNFT1155.json'
import NFTBox from '../contracts/THTESTNFT1155.json'

const config = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSCTestnet.chainId]: `https://data-seed-prebsc-2-s3.binance.org:8545/`,
  },
}

//import { BoxNftContractAddr } from '../config'

// const loadContract = async () => {

//   try {
//     //THIS ALLOWS YOU TALK TO BLOCKCHAIN
//     const web3Modal = new Web3Modal({
//       network: "mainnet", // optional
//       cacheProvider: true, // optional
//       providerOptions: {}, // required
//     });
//     const provider = await web3Modal.connect();
//     const web3 = new Web3(provider);
//     const netId = await web3.eth.net.getId();
//     //THIS WILL LOAD YOUR CONTRACT FROM BLOCKCHAIN
//     const contract = new web3.eth.Contract(
//       Contract.abi,
//       Contract.networks[netId].address
//     );

//   } catch (e) {
//     console.log("error = ", e);
//   }
// };

export default function Airdrop() {
  
  const [nfts, setNFts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')


  // let address = null
  // const loadAddress = async () => {
  //   const [address] = await window.ethereum.request({
  //     method: "eth_requestAccounts"
  //   });
  //   console.log(address)
  // }
  
  // useEffect(()=> {
  //   loadAddress()
  // }, [])

  async function loadNFTs() {
    // what we want to load:
    // ***provider, tokenContract, marketContract, data for our marketItems***
    
    //const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545", 97)
    //const provider = new ethers.providers.JsonRpcProvider("bsc-testnet")
    //const [address] = await provider.send("eth_requestAccounts", []);
    //const provider = new ethers.providers.Web3Provider(window.ethereum);

    // start web3modal
    const address = await window.ethereum.request({ method: "eth_requestAccounts" });

    console.log(address)
    console.log(address[0])
    const web3Modal = new Web3Modal({
      network: "bsc-testnet", // optional
      disableInjectedProvider: true, // optional
      cacheProvider: true, // optional
      providerOptions: {}, // required
    });
    const connection = await web3Modal.connect();
    // end web3modal

    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(NFTBox.TcontractAddress, NFTBox.abi, signer);
    //const data = await tokenContract.isWhitelistClaim()
    //console.log(data)
    // const provider = new ethers.providers.JsonRpcProvider()
    // const tokenContract = new ethers.Contract(NFTBox.TcontractAddress, NFTBox.abi, provider)
    //const marketContract = new ethers.Contract(nftmarketaddress, KBMarket.abi, provider)
    //const data = await marketContract.fetchMarketTokens()
    //const data = await tokenContract.isWhitelistClaim(address)
    console.log(tokenContract)
    console.log(tokenContract.address)
    const data = await tokenContract.balanceOf(address[0], 0);
    console.log(data)
    //let aa = ethers.utils.parseEther(data)
    let bb = data.toString()
    console.log(provider)
    //console.log(aa)
    console.log(bb)
    // const items = await Promise.all(data.map(async i => {
    //   const tokenUri = await tokenContract.tokenURI(i.tokenId)
    //   // we want get the token metadata - json 
    //   const meta = await axios.get(tokenUri)
    //   let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    //   let item = {
    //     price,
    //     tokenId: i.tokenId.toNumber(),
    //     seller: i.seller,
    //     owner: i.owner,
    //     image: meta.data.image, 
    //     name: meta.data.name,
    //     description: meta.data.description
    //   }
    //   return item
    // }
    // ))

    //setNFts(items)
    setLoadingState('loaded')
  }


  return (
    <Layout>
    <div className="text-secondary">
      <h1>Airdrop</h1>
    </div>
    <div>
    <button className="btn btn btn-light me-2 px-2 btn-sm" onClick={loadNFTs}>
      Claim Box
    </button>    
    <button className="btn btn btn-light me-2 px-2 btn-sm">
      <span>Account</span>
      {/* <span>
        {account === null
          ? "-"
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ""}
      </span> */}
    </button>
    </div>
    </Layout>
  );

}
