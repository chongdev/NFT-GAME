import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
// import Airdrop from '../../build-truffle/Airdrop.json';

const networks = {
  56: "Binance Smart Chain Mainnet",
  97: "Binance Smart Chain Testnet",
  5777: "Local development blockchain"
};

// function onAddressChanged(onConnected) {
//   if (window.ethereum) {
//     window.ethereum.on("accountsChanged", function (accounts) {
//       if (accounts.length > 0) {
//         const account = accounts[0];
//         onConnected(account);
//         return;
//       }
//     });
//   }
// }

const getBlockchain = () =>
  new Promise(async (resolve, reject) => {
    const provider = await detectEthereumProvider();

    if (provider) {
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const networkId = await provider.request({ method: "net_version" });

      if (networkId !== process.env.NEXT_PUBLIC_NETWORK_ID) {
        const targetNetwork = networks[process.env.NEXT_PUBLIC_NETWORK_ID];
        reject(`Wrong network, please switch to ${targetNetwork}`);
        return;
      }

      
      provider.on("accountsChanged", function (accounts) {
        if (accounts.length > 0) {
          const account = accounts[0];
          console.log("accountsChanged", account);
          return;
        }
      });

      // const web3 = new Web3(provider);
      //   const airdrop = new web3.eth.Contract(
      //     Airdrop.abi,
      //     Airdrop.networks[networkId].address,
      //   );
      resolve({ accounts });
      return;
    }

    reject("Install Metamask");
  });


const detectEthereumNetwork = async () => {
  const web3 = await getWeb3();
  web3.eth.net.getNetworkType().then(async (netId) => {
      console.log('netId', netId);
    // Do something based on which network ID the user is connected to
  });
};

export default getBlockchain;
