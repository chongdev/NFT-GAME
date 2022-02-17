import Layout from "../src/components/Layout";

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import { BscscanProvider } from "@ethers-ancillary/bsc";

//import { BSC, BSCTestnet, Mainnet, DAppProvider } from '@usedapp/core'

//import { TcontractAddress, abi } from '../contracts/THTESTNFT1155.json'
import NFTBox from '../contracts/THTESTNFT1155.json'

//import { BoxNftContractAddr } from '../config'

// const loadContract = async () => {


//   const [nfts, setNFts] = useState([])
//   const [loadingState, setLoadingState] = useState('not-loaded')


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

  const [userAddr, setUserAddr] = useState(null)
  const [isUWhitelist, setIsUWhitelist] = useState(null)
  const [boxType, setBoxType] = useState(null)
  const [boxQuota, setBoxQuota] = useState(null)

  //let userAddr = null

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
    console.log("------------start---------------")
    setLoadingState('loaded');

    // start web3modal
    const address = await window.ethereum.request({ method: "eth_requestAccounts" });
    //userAddr = address[0];
    console.log(address)
    console.log(address[0])
    const web3Modal = new Web3Modal({
      network: "bsc-testnet", // optional
      cacheProvider: true, // optional
      // disableInjectedProvider: true, // optional
      // providerOptions: {}, // required
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
    console.log("provider : ", provider)
    console.log(tokenContract)
    console.log("contract address : ", tokenContract.address)

    const data = await tokenContract.balanceOf(address[0], 0);
    console.log("balanceOf : ", data.toString())
    const data2 = await tokenContract.isWhitelistClaim(address[0]);
    console.log("data2 : ", data2)
    console.log("whitelist : ", data2[0])
    console.log("claim : ", data2[1])
    console.log("box type : ", data2[2].toNumber())
    console.log("box quota : ", data2[3].toNumber())

    // try {
    //   const response = await tokenContract.balanceOf(address[0], 0);
    //   // if(!response.ok) {
    //   //   throw new Error('Something went wrong');
    //   // }
    //   const data = await response  //.json();
    //   console.log("data : ", data)
    //   let bb = data.toString()
    //   console.log("balanceOf : ", bb)
    // } catch (err) {
    //     console.log("Error: ", err)
    // }
    // //let aa = ethers.utils.parseEther(data)
    // //console.log(aa)
    // try {
    //   const data2 = await tokenContract.isWhitelistClaim(address[0]);
    //   console.log("data2 : ", data2)
    // } catch (err) {
    //   console.log("Error: ", err)
    // }


    //////////////////*************************** */
    // let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    // let transaction = await contract.createToken(url);
    // let tx = await transaction.wait();
    // let event = tx.events[0];
    // let value = event.args[2];
    // let tokenId = value.toNumber();

    // async function buyCharacter(){
    //   if (typeof window.ethereum !== 'undefined') {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     console.log({ provider })
    //     const signer = provider.getSigner()
    //     const contract = new ethers.Contract(Gtokenaddress, Gtoken.abi, signer)
    //     try {
    //       await contract.buyCharacter();
                 
    //     } catch (err) {
    //       console.log("Error: ", err)
    //     }
    //   }    
    // }
    //////////////////*************************** */

    console.log("------------end---------------")
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
    setUserAddr(address[0]);
    setIsUWhitelist(data2[0]);
    setBoxType(data2[2]);
    setBoxQuota(data2[3]);
    //setNFts(items)
    setLoadingState('not-loaded');
  }


  return (
    <Layout>
    <div className="text-secondary">
      <h1>Airdrop</h1>
    </div>
    <div>
      <div className="text-white"><h5>
        {userAddr === null
          ? "Address"
          : userAddr
          ? `Address :  ${userAddr.substring(0, 6)}...${userAddr.substring(userAddr.length - 4)}`
          : ""}
      </h5></div>
      <div className="text-white"><h5>
        {isUWhitelist === null
          ? "Whitelist"
          : isUWhitelist
          ? `Whitelist :  ${isUWhitelist}`
          : `Whitelist :  ${isUWhitelist}`}
      </h5></div>
      <div className="text-white"><h5>
        {boxType === null
          ? "Box Type"
          : `Box Type :  ${boxType}`}
      </h5></div>
      <div className="text-white"><h5>
        {boxType === null
          ? "Box Quota"
          : `Box Quota :  ${boxQuota}`}
      </h5></div>
      {/* <button className="btn btn btn-light me-2 px-2 btn-sm">
        <span>
          {userAddr === null
            ? "-"
            : userAddr
            ? `${userAddr.substring(0, 6)}...${userAddr.substring(userAddr.length - 4)}`
            : ""}
        </span>
      </button> */}
      <button className="btn btn btn-light me-2 px-2 btn-sm" onClick={loadNFTs}>
        {loadingState === 'not-loaded'
          ? "Check Whitelist"
          : <span><div className='spinner-border spinner-border-sm text-primary'></div> Loading ...</span>
        }
      </button>
    </div>
    </Layout>
  );

}
