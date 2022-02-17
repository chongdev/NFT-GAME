import { useEffect, useState, useContext, Dispatch, SetStateAction } from "react";
import { Web3Context } from "./context/Web3Context";
import { Web3Provider } from "@ethersproject/providers";
//import { TodoList, TodoList__factory } from "lib/typechain-types/index";
//import { toast } from "react-toastify";
import { ethers } from "ethers";
import reactDom from "react-dom";

//import { MyContractAddr } from '../constants/Contract_Address';
//import { MyContractAddr } from '../config';
//import { abi } from '../constants/Contract_Abi';

import Web3Modal from "web3modal";

export const MetaMask = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  async function connect() {
    const ethereum = window.ethereum;

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: {}, // required
    });
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()

		console.log("connect")
  }

  //************************************************* */
  const { account, setWeb3 } = useContext(Web3Context);

	async function enableEth() {
		console.log("enableEth")

		const ethereum = window.ethereum;
		try {
			if (ethereum) {
				const provider = new Web3Provider(ethereum);
				const [address] = await ethereum.request({
					method: "eth_requestAccounts"
				});
				const chainId = await ethereum.request({ method: "eth_chainId" });
        console.log(provider)
        console.log(chainId)
        console.log(address[0])
        
				// let contractAddress;
				// switch (chainId) {
				// 	case "0x1": // Mainnet
				// 		contractAddress = "";
				// 		break;
				// 	case "0x3": // Ropsten
				// 		contractAddress = "";
				// 		break;
        //   case "0x4": // Rinkeby
				// 		contractAddress = "";
				// 		break;
        //   case "0x61": // BSC Testnet
				// 		contractAddress = "0xaf4a26e8c183b38f8b8817e587f4662b04ec876c";
				// 		break;
				// 	case "0x89": // Polygon Mainnet
				// 		contractAddress = "";
				// 		break;
				// 	case "0x13881": // Polygon Testnet
				// 		contractAddress = "";
				// 		break;
				// 	default:
				// 		// Hardhat Local
				// 		contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
				// }
				let contractAddress = "0x7dfdc43933c841516b3940705352815fe2e35624";

				const signer = provider.getSigner(address);
				const account = signer._address;

				//const contract = TodoList__factory.connect(contractAddress, signer);
				const contract = new ethers.Contract(contractAddress, ABI.abi, provider)

				setWeb3 &&
					setWeb3((prev) => ({
						...prev,
						contract,
						provider,
						account
					}));
			} else if (window.web3) {
				console.log("Update MetaMask");
			} else {
				console.log("Enable MetaMask");
			}
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<div className="py-3">
			{!account ? (<div>
				<button className="metamask-btn" onClick={connect}>
        {/* onClick={enableEth}> */}
				connect
				</button>
								
								<button className="metamask-btn2" onClick={enableEth}>
								enableEth
								</button></div>
				
			) : (
				<button
					className="blue-btn"
					onClick={() =>
						toast.info(`Your wallet address is: ${account}`, {
							autoClose: 3000,
							position: "top-center",
							style: {
								width: 520
							},
							theme: "colored"
						})
					}
				>
					Wallet Connected
				</button>
			)}
		</div>
	);
};
