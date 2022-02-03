import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="hero-homepage">
        <div className="hero-gackground-gradient"></div>

        <div className="center-warp">
          <h1>404</h1>
          <p>This page could not be found.</p>
          <Link href="/">
              <a className="btn">Go To Home</a>
          </Link>
        </div>
      </div>
    </>
  );
}
