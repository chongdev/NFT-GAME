export default function Player({ poster, source }) {
  function play() {
    // $('video')
  }

  setTimeout(() => {
    play();
  }, 1);

  return (
    <video className="heropage_HeroPortrait_22nJ5" poster={poster} autoPlay={true} preload={`auto`} loop={true}>
      <source type="video/webm" src={source} />
      <img src={poster} />
    </video>
  );
}

// <video
// className="heropage_HeroPortrait_22nJ5"
// poster={``}
// autoPlay={true}
// preload={`auto`}
// loop={true}
// >
// <source
//   type="video/webm"
//   src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.webm`}
// />
// <img
//   src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/winter_wyvern.png`}
// />
// </video>
