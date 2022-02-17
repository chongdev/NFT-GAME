// import { createContext } from 'react';
// const Web3ProviderContext = createContext();

// export default Web3ProviderContext;

/// new
import { createContext, useContext, useState } from "react";

//default values
export const walletDefaultValue = {
  provider: null,
  signer: null,
  userAddress: null,
  etherLoaded: false,
};

//provider
export const web3UserContext = createContext(
  walletDefaultValue
);

//hooks that components can use to change the values
export function useWeb3userContext() {

  //const [config, setConfig] = useState();
	const [{ provider, signer, userAddress, etherLoaded }, setWeb3] = useState({});

  const handleWalletContext = (provider, signer, userAddress, etherLoaded) => {

    setConfig({
      provider,
      signer,
      userAddress,
      etherLoaded,
    });

  };

  return {

    <web3UserContext.Provider
      value={{
        provider, signer, userAddress, etherLoaded,
        handleWalletContext
      }}
    >
      {children}
    </web3UserContext.Provider>

  };
}