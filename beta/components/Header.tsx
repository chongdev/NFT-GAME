import { useEffect, useState, useContext, createContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useLogin } from "../contexts/login";
// import { LoginProvider } from "../contexts/login";

function Header() {
  const router = useRouter();

  const {setLoginActive} = useLogin();
  const open = () => setLoginActive(true);

  useEffect(() => {}, []);

  return (
    <header className="navbar">
      <ul className="navbar-nav">
        <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>

        <li
          className={
            router.pathname == "/airdrop" ? "nav-item active" : "nav-item"
          }
        >
          <Link href="/airdrop">
            <a className="nav-link">Airdrop</a>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/marketplace" ? "nav-item active" : "nav-item"
          }
        >
          <Link href="/marketplace">
            <a className="nav-link">Marketplace</a>
          </Link>
        </li>
        <li
          className={
            router.pathname == "/inventory" ? "nav-item active" : "nav-item"
          }
        >
          <Link href="/inventory">
            <a className="nav-link">Inventory</a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="https://whitepaper.dragonary.com/dragonary-whitepaper/v/english-whitepaper/"
            target={`_blank`}
            className="nav-link"
          >
            Whitepaper
          </a>
        </li>
      </ul>

      <div>
        <button type="button" className="btn" onClick={() => open}>
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;
