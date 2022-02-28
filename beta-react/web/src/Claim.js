import { useWeb3React } from '@web3-react/core'
import useAuth from './hooks/useAuth'
import { ConnectorNames } from './utils/web3React'

const connectors = [
    {
        title: 'Metamask',
        connectorId: ConnectorNames.Injected,
    },
]

export default function Claim() {
    const { login } = useAuth()

    const { account } = useWeb3React()

    return (
        <>
            {!account ? (
                <button type="button" onClick={() => {
                    login(connectors[0].connectorId)
                }} className='btn btn-lg'>{`Connect Wallet`}</button>
            ) : (
                <button type="button" className='btn btn-lg'>Claim</button>
            )}
        </>

    )
}