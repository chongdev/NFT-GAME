import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.scss';
import logo from './logo.png';

import { useWeb3React } from '@web3-react/core'
import useAuth from '../hooks/useAuth'
import { ConnectorNames } from '../utils/web3React'
import useWeb3 from '../utils/useWeb3'
import { useEffect, useState } from 'react'

const connectors = [
    {
        title: 'Metamask',
        connectorId: ConnectorNames.Injected,
    },
]

function MainHeader() {
    const { login } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const { account } = useWeb3React()
    const web3 = useWeb3()

    const formatAddress = (address) => {
        if (address) {
            const addressArr = address.split('')
            return `${addressArr.slice(0, 11).join('')}...${addressArr.slice(-11).join('')}`
        }

        return null
    }

    useEffect(() => { }, [account])

    const onHandleLogin = async () => {

        try {
            const timestamp = new Date().getTime()
            const message = `demo-${timestamp}`
            const signedData = await web3.eth.personal.sign(message, account)

            setIsLoading(true)

            console.log(signedData);

            if (signedData) {
                toast.success('Successfully create account', {
                    hideProgressBar: true,
                })
            }

        } catch (error) {

            toast.error(error.message, {
                hideProgressBar: true,
            })
        }
    }

    return (
        <header className={classes.header}>
            <a className={classes.navbarBrand}><img src={logo} /></a>

            <div className={classes.navbarNav}>
                <nav>
                    <NavLink activeClassName={classes.active} to='/'>
                        Welcome
                    </NavLink>
                    <NavLink activeClassName={classes.active} to='/airdrop'>
                        Airdrop
                    </NavLink>
                </nav>

                <div className='ml-3'>
                    <button type="button" onClick={() => {
                        login(connectors[0].connectorId)
                    }} className='btn'>{isLoading ? `loading...` : `Connect Wallet`}</button>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;