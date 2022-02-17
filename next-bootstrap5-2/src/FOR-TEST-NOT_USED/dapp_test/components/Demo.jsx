import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { useEffect, useState } from "react";

import { injected, walletconnect, POLLING_INTERVAL } from "../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../dapp/hooks";
import logger from "../logger";
//import { Header } from "./Header";

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  }
  if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  }
  if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
    return "Please authorize this website to access your Ethereum account.";
  }
  logger.error(error);
  return "An unknown error occurred. Check the console for more details.";
}

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

export const Demo = function () {
  const context = useWeb3React();
  const { connector, library, account, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const activating = (connection) => connection === activatingConnector;
  const connected = (connection) => connection === connector;
  const disabled = !triedEager || !!activatingConnector || connected(injected) || connected(walletconnect) || !!error;
  return (
    <>
      
            <div className="justify-end">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setActivatingConnector(injected);
                  activate(injected);
                }}
              >
                <div className="px-2 py-4">
                  {activating(injected) && <p className="btn loading">loading...</p>}
                  {connected(injected) && (
                    <span role="img" aria-label="check">
                      ✅
                    </span>
                  )}
                </div>
                Connect with MetaMask
              </button>
              
              {(active || error) && connected(injected) && (
                <>
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        library
                          .getSigner(account)
                          .signMessage("👋")
                          .then((signature) => {
                            window.alert(`Success!\n\n${signature}`);
                          })
                          .catch((err) => {
                            window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ""}`);
                          });
                      }}
                    >
                      Sign Message
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (connected(walletconnect)) {
                        (connector).close();
                      }
                      deactivate();
                    }}
                  >
                    Deactivate
                  </button>
                </>
              )}
            </div>

    </>
  );
};

export default Demo;
