import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import NextNprogress from "nextjs-progressbar";

//import { Web3ReactProvider } from "@web3-react/core";
//import { Web3Provider } from '@ethersproject/providers';

//import { Web3Provider } from "../src/ether-dapp/context/Web3Context";

import EthereumProvider from "../src/nextjs-truffle-ethers-starter/EthereumProvider";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  // const getLibrary = (provider) => {
  //   const library = new Web3Provider(provider);
  //   library.pollingInterval = 12000;
  //   return library;
  // }

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

    {/* <EthereumProvider>
      <Component {...pageProps} />
    </EthereumProvider> */}

    {/* <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider> */}

    {/* <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider> */}
  </>
  )
}

export default MyApp
