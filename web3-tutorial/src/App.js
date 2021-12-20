import React, { useState } from "react";
import { getOwnBalance } from "./Web3Client";

function App() {
  const [balance, setBalance] = useState(0);

  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <p>Your balance is {balance}</p>
      <button onClick={() => fetchBalance()}>Refresh balance</button>
    </div>
  );
}

export default App;
