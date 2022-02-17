import { useEthereum } from "./EthereumProvider"

const MetaMaskConnectButton = () => {
  const { provider, getAddress } = useEthereum()

  async function buttonHandler() {
    getAddress()
  }

  return (
    <button
      onClick={buttonHandler}
      className="btn btn-outline-primary me-2 px-3 btn-sm"
    >
      Connect
    </button>
  )
}

export default MetaMaskConnectButton