import { createWeb3ReactRoot } from '@web3-react/core'
// import { DefaultProviderName } from '../config/constant'
import { ConnectorNames } from "../utils/web3React";

const Web3ReactProviderDefault = createWeb3ReactRoot(ConnectorNames.Injected)

const Web3ReactProviderDefaultSSR = ({ children, getLibrary }) => {
  return (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderDefault>
  )
}

export default Web3ReactProviderDefaultSSR;