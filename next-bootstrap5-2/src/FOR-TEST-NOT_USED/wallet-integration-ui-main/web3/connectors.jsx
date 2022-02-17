import { InjectedConnector } from "@web3-react/injected-connector";
//import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  56: process.env.RPC_URL_BSC,
  97: process.env.RPC_URL_BSC_TEST,
};

export const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
});

// export const walletlink = new WalletLinkConnector({
//   url: RPC_URLS[1],
//   appName: "OCTA Web",
//   supportedChainIds: [56, 97],
// });
