import classes from './Airdrop.module.scss';
import Claim from '../Claim';

function Airdrop() {
    return <div className="container">

        <section>
            <h1 className={classes.airdropTitle}>Airdrop</h1>

            <div className={classes.airdropHero}>

                <div className={classes.airdropHeroStage}>
                    <img src='https://public.nftstatic.com/static/nft/zipped/ce966710304b40d1839de1fc0920d2af_zipped.png' alt='' />
                </div>

                <div className={classes.airdropHeroInfo}>
                    <h2>Gamma - Tier 1 (1st Limited Edition)</h2>

                    <div className={classes.airdropHeroInfoContent}>
                        <p>“Dark Frontiers” is the newest, gamified space realm governed by a Gamestarter produced DAO. As NFT standards and values are shifting towards promoting use-cases, Dark Frontiers’ goal is to drive mainstream adoption by enhancing the usability of NFTs through staking, item ownership, and the creation of real-world value through in-game items.</p>

                        <p>Embarking on the gamified metaverse, players will pilot their own spaceship and conquer new planets, defeat oppositions, form guilds and capture new and unique NFTs that can either be built on or sold on the open markets.</p>
                    </div>

                    <Claim />
                </div>


            </div>
        </section>

        <section>
            <div className='tab-product'></div>
        </section>
    </div>
}

export default Airdrop;