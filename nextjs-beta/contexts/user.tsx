import { useEffect, useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

// import iconX from "../assets/icons/x.svg";

import {useLogin} from "./login";

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

async function checkIfWalletIsConnected(onConnected, onLoad) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
      //  method: "eth_requestAccounts"
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      onLoad(false);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }

    onLoad(false);
  }
}

function onAddressChanged(onConnected) {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);

        console.log("accountsChanged", account);

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

const DefaultUser = {
  address: ""
};

const UserContext = createContext(DefaultUser);

export const UserProvider = ({ children }) => {
    const {loginActive, onLoginActive} = useLogin();
  //   const [loginActive, setLoginActive] = useState(loginActive);

  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  console.log("loginActive:", loginActive);

  const [address, setUserAddress] = useState("");
  //   const [provider, setProvider] = useState();
  //   const [signer, setSigner] = useState();
  //   const [address, setAddress] = useState();

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress, setLoading);
    onAddressChanged(setUserAddress);
  }, []);

  //   console.log("userAddress : ", userAddress);

  //   const getWeb3ModalProvider = async () => {
  //     const providerOptions = {};
  //     const web3Modal = new Web3Modal({
  //       cacheProvider: false,
  //       providerOptions // required
  //     });
  //     return await web3Modal.connect();
  //   };

  //   const connect = async () => {
  //     const provider = await getWeb3ModalProvider();
  //     const web3provider = new ethers.providers.Web3Provider(provider);
  //     const _signer = await web3provider.getSigner();

  //     // setSigner(_signer);
  //     // setAddress((await _signer.getAddress()).toLowerCase());
  //     // setProvider(web3provider);
  //     return Promise.resolve(web3provider);
  //   };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <UserContext.Provider value={{ address }}>
          {children}

          {address ? (
            <></>
          ) : (
            <div className="login-wrapper">
              <div className="login-modal">
                <button
                  type="button"
                  className="login-close btn-action"
                ></button>
                <div className="login-header">Create Account</div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => connect(setUserAddress)}
                >
                  Log in Metamask account
                </button>
              </div>
            </div>
          )}
        </UserContext.Provider>
      )}
    </>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};

export default UserContext;

// export const useUser = () => {
//     return useContext(UserContext);
// };
