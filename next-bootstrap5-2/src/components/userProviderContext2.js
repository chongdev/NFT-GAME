import { createContext, useState, useEffect } from "react";

export const web3UserContext = createContext();

export const web3UserProvider = ({ children }) => {

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
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

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
		<web3UserContext.Provider
			value={{
				contract,
				provider,
				account,
				setWeb3
			}}
		>
			{children}
		</web3UserContext.Provider>
	);
};
