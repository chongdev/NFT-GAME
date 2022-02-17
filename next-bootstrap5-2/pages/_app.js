import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import NextNprogress from "nextjs-progressbar";

//import { useWeb3userContext, web3UserContext } from '../src/PavanGangireddy-nextjs-ether/context/useWeb3ProviderContext';
//import Web3ProviderContext from '../src/PavanGangireddy-nextjs-ether/context/useWeb3ProviderContext';

import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import web3UserProvider from "../src/components/userProviderContext";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  //const web3uc = useWeb3userContext()

  // const [config, setConfig] = useState({
  //   etherLoaded: false,
  //   provider: null,
  //   signer: null,
  //   userAddress: null,
  // });

  // useEffect(() => {
  //   let instance = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = instance.getSigner();
  //   const getAddress = async () => {
  //     //let userAddress = await signer.getAddress();
  //     let userAddress = await window.ethereum.request({
  //       method: "eth_requestAccounts"
  //     });
  //     setConfig({
  //       provider: instance,
  //       signer,
  //       userAddress,
  //       etherLoaded: true,
  //     });
  //   };
  //   getAddress();
  // }, []);

  return (
    <>
    <NextNprogress
      color="#ff7a0e"
      startPosition={0.5}
      stopDelayMs={200}
      height={6}
      showOnShallow={true}
    />
<Component {...pageProps} />
    {/* <web3UserProvider.Provider>
      <Component {...pageProps} />
    </web3UserProvider.Provider> */}


    {/* <web3UserContext.Provider value={web3uc}>
      <Component {...pageProps} />
    </web3UserContext.Provider> */}

  </>
  )
}

export default MyApp
