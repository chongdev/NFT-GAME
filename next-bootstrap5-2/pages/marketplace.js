import Layout from "../src/components/Layout";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Web3ReactConnectionComponent from '../src/web3react-demo/Web3ReactConnectionComponent';
//<Web3ReactConnectionComponent />

import { useEthereum } from '../src/nextjs-truffle-ethers-starter/EthereumProvider'
import MetaMaskConnectButton from '../src/nextjs-truffle-ethers-starter/MetaMaskConnectButton'

const Marketplace = () => {
  const { address } = useEthereum()
  return (
    <Layout>
      <div className="text-secondary">
        <h1>Marketplace</h1>
      </div>
      <MetaMaskConnectButton />
    </Layout>
  );

}

export default Marketplace
