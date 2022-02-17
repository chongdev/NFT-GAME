//import { Web3MetaMask } from "..Metamask";
import { createContext, useState, useEffect } from "react";
//import { MyContractAddr } from '../config';
//import NFTBox from '../contracts/THTESTNFT1155.json'
import NFTBox from '../../../contracts/THTESTNFT1155.json'

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
	const [{ contract, provider, account }, setWeb3] = useState({});

	// Listens for network changes to reload the page
	useEffect(() => {
		window.ethereum.on("chainChanged", (chainId) =>
			window.location.reload()
		);
		return () => {
			window.ethereum.removeListener("chainChanged", (chainId) =>
				window.location.reload()
			);
		};
	}, []);

	// Listens for a change in account and updates state
	useEffect(() => {
		function newAccount(accounts) {
			const signer = provider?.getSigner(accounts[0]);

			setWeb3((prev) => ({
				...prev,
				contract: contract.connect(signer),
				account: signer._address
			}));
		}

		window.ethereum.on("accountsChanged", newAccount);
		return () => {
			window.ethereum.removeListener("accountsChanged", newAccount);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [account]);

	return (
		<Web3Context.Provider
			value={{
				contract,
				provider,
				account,
				setWeb3
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};
