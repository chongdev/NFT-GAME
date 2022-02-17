import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import NextNprogress from "nextjs-progressbar";

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  console.log(context.chainId);
  console.log(context.account);

  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <>
    <NextNprogress
      color="#ff7a0e"
      startPosition={0.5}
      stopDelayMs={200}
      height={6}
      showOnShallow={true}
    />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  </>
  )
}

export default MyApp
