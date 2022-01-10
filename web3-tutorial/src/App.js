// import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import ConnectButton from "./components/ConnectButton";
import MetaMaskAuth from "./components/MetaMaskAuth";
  // import styles from "./index.css";

function App() {

  return (
    <div className="container">

      <div className="gddqsm">
        <h1>Log in by connecting a wallet</h1>
        
        <div className="wallet-list">
          <MetaMaskAuth />
        </div>
      </div>
      
    </div>
  );
}

export default App;
