import Link from 'next/link';
import NavItem from './NavItem';

//import Web3ProviderContext from '../PavanGangireddy-nextjs-ether/context/useWeb3ProviderContext'
import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';

//import WalletCard from '../web3connect/WalletCard';
// import { Account } from "../dapp_test/components/Account";
// import { Balance } from "../dapp_test/components/Balance";
// import { ChainId } from "../dapp_test/components/ChainId";
// import { MetaMask } from "../ether-dapp/Metamask";

//import { Demo } from "../dapp_test/components/Demo";
{/* <Balance />
<ChainId /> */}

const Header = () => {

  //const value = useContext(Web3ProviderContext);
  //const { provider, userAddress, signer, etherLoaded } = value;
  //const [userAddress, setUserAddress] = useState();
  const userAddress = null;
  // const [config, setConfig] = useState({
  //   etherLoaded: false,
  //   provider: null,
  //   signer: null,
  //   userAddress: null,
  // });

  async function connectWallet() {
    //useEffect(() => {
      let instance = new ethers.providers.Web3Provider(window.ethereum);
      const signer = instance.getSigner();
      //let userAddress = await window.ethereum.request({ method: "eth_requestAccounts" });
      let userAddr = await window.ethereum.request({ method: "eth_requestAccounts" });
      //let value.userAddress = userAddr;
      // const getAddress = async () => {
      //   let userAddress = await signer.getAddress();
      //   setConfig({
      //     provider: instance,
      //     signer,
      //     userAddress,
      //     etherLoaded: true,
      //   });
      // };
      // getAddress();
  //console.log("1 : " + userAddress)
    //}, []);
  };

  // useEffect(() => {
  //   if (etherLoaded) {
  //     requestEthAccounts();
  //   }
  // }, [etherLoaded]);


  // //const [userAddress, setUserAddress] = useState('');

  // async function connectWallet() {

  //   useEffect(() => {
  //     let instance = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = instance.getSigner();
  //     let userAddress = await window.ethereum.request({
  //       method: "eth_requestAccounts"
  //     });
  //     setConfig({
  //       provider: instance,
  //       signer,
  //       userAddress,
  //       etherLoaded: true,
  //     });
  //     console.log("1 : " + userAddress)
  //   }, []);
  //}
//console.log("2 : " + userAddress)

  return (

    <div className="container">
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-3 border-bottom">
         <Link href="/">
          <a className="navbar-brand">
            <span className="fw-bold text-secondary text-warning">OCTA</span>
          </a>
        </Link>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li> <NavItem to='/airdrop'>Airdrop</NavItem> </li>
          <li> <NavItem to='/myinventory'>My Inventory</NavItem> </li>
          <li> <NavItem to='/marketplace'>Marketplace</NavItem> </li>
        </ul>

        <div className="d-grid gap-2 d-md-block text-end">
          
          {/* <button className="btn btn btn-light me-2 px-3 btn-sm disabled">
            <span>Account</span>
          </button> */}
          {/* <ChainId /> 
          <Balance />
          <Account /> */}
          {/* <MetaMask /> */}
          {/* <Demo /> */}
          {/* <button type="button" className="btn btn-outline-primary me-2 px-3 btn-sm" style={{background: 'green', color: 'darkblue'}}>
            Connect Wallet
          </button> */}
          <button type="button" className="btn btn-outline-primary me-2 px-3 btn-sm" onClick={connectWallet}>
            <span>Connect Wallet</span>
            <span>
              {userAddress === null
                ? ""
                : account
                ? `${userAddress.substring(0, 6)}...${userAddress.substring(account.length - 4)}`
                : ""}
            </span>
          </button>
        </div>
      </nav>
    </div>

  );
};
export default Header;