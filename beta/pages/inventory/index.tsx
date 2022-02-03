import Player from "../../components/Player";

function InventoryPage() {
  return (
    <>
    <div className="hero-homepage">
        <div className="hero-gackground-gradient"></div>

        <h1>The Inventory Page</h1>

        <div className="heropage_HeroPortraitContainer_3oI3C">
          <Player
            poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png`}
            source={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.webm`}
          />
        </div>
      </div>

      <div className="heropage_DetailsBarContainer"></div>
    </>
  );
}

export default InventoryPage;
