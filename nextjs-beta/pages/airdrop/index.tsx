import { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import getBlockchain from '../../utils/ethereum';
import { toast } from 'react-toastify'

import Player from "../../components/Player";

function AirdropPage() {

  console.log( 'AirdropPage==?', process.env.NEXT_PUBLIC_NETWORK_ID );
  
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [claimMessage, setClaimMessage] = useState({
    payload: undefined,
    type: undefined
  });
  const [airdrop, setAirdrop] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try { 
        const { accounts } = await getBlockchain();
        console.log( accounts );
        
        // setAirdrop(airdrop);
        // setAccounts(accounts);
        // setLoading(false);
      } catch(e) {
        // console.log( `Error`, e );
        
        toast.error(e, {
          hideProgressBar: true,
        })

        // setLoadingMessage(e);
      }
    };

    init();
  }, []);

  return (
    <>
      <div className="hero-homepage">
        <div className="hero-gackground-gradient"></div>

        <h1>The Airdrop Page</h1>

        <div className="heropage_HeroPortraitContainer_3oI3C">
          <Player
            poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.png`}
            source={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ember_spirit.webm`}
          />
        </div>
      </div>

      <div className="heropage_DetailsBarContainer"></div>
    </>
  );
}

export default AirdropPage;
