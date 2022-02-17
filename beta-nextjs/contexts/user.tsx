import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import dynamic from "next/dynamic";
import { Web3ReactProvider } from "@web3-react/core";
const Web3ReactProviderDefault = dynamic(
  () => import("../components/DefaultProvider"),
  { ssr: false }
);

import useAuth from "../hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { getLibrary, ConnectorNames } from "../utils/web3React";
import useWeb3 from "../utils/useWeb3";

const connectors = [
  {
    title: "Metamask",
    connectorId: ConnectorNames.Injected
  }
];

const DefaultUser = {
  address: ""
};

const UserContext = createContext(DefaultUser);

export const UserProvider = ({ children }) => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { account } = useWeb3React();
  const web3 = useWeb3();

  // Clear input when change metamask acc
  useEffect(() => {
    setPassword("");
    setEmail("");
  }, [account]);

  //   const [provider, setProvider] = useState();
  //   const [signer, setSigner] = useState();
  //   const [address, setAddress] = useState();

  const connect = async () => {
    console.log("connect...");
    //   const provider = await getWeb3ModalProvider();
    //   const web3provider = new ethers.providers.Web3Provider(provider);
    //   const _signer = await web3provider.getSigner();
    //   setSigner(_signer);
    //   setAddress((await _signer.getAddress()).toLowerCase());
    //   setProvider(web3provider);
    //   return Promise.resolve(web3provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderDefault getLibrary={getLibrary}>
        {children}
        <div className="login-wrapper">
          <div className="login-modal">
            <div className="login-header">Create Account</div>

            {!account ? (
              <button
                type="button"
                className="btn"
                onClick={() => {
                  login(connectors[0].connectorId);
                }}
              >
                Log in Metamask account
              </button>
            ) : (
              <div>Sign up</div>
            )}
          </div>
        </div>
      </Web3ReactProviderDefault>
    </Web3ReactProvider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};

export default UserContext;
