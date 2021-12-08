import React, { useEffect } from "react";
import Web3 from "web3";

function App() {
  let providerUrl = process.env.PROVIDER_URL || "http://localhost:8545";

  useEffect(() => {
    const web3 = new Web3(providerUrl);
        let provider = window.ethereum;

        if (typeof provider !== "undefined") {
          provider
            .request({ method: "eth_requestAccounts" })
            .then((accounts) => {
              console.log(accounts);
            })
            .catch((err) => {
              console.log(err);
              return;
            });
        }
  }, []);

  return <div className="App"></div>;
}

export default App;
