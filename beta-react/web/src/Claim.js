import { useEffect, useState } from 'react'

import { useWeb3React } from '@web3-react/core'
import useAuth from './hooks/useAuth'
import { ConnectorNames } from './utils/web3React'

const connectors = [
    {
        title: 'Metamask',
        connectorId: ConnectorNames.Injected,
    },
]

export default function ConnectWallet() {
    const { login } = useAuth()
    const [isLoading] = useState(false)

    const { account } = useWeb3React()

    const formatAddress = (address) => {
        if (address) {
            const addressArr = address.split('')
            return `${addressArr.slice(0, 11).join('')}...${addressArr.slice(-11).join('')}`
        }

        return null
    }

    useEffect(() => { }, [account])

    return (
        <>
            {!account ? (
                <button type="button" onClick={() => {
                    login(connectors[0].connectorId)
                }} className='btn btn-lg'>{isLoading ? `loading...` : `Connect Wallet`}</button>
            ) : (
                <button type="button" className='btn btn-lg'>Claim</button>
            )}
        </>

    )
}