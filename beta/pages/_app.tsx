import dynamic from "next/dynamic";
import { UserProvider } from "../contexts/user";

import { ToastContainer } from "react-toastify";
// import styled from "styled-components";
import "../assets/css/app.scss";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Head from "next/head";

import { ProvideLogin } from "../contexts/login";

// import Image from 'next/image'
// import { CSSTransition } from "react-transition-group";
// // import { toast } from 'react-toastify'
// import axios from "axios";

function App({ Component, pageProps }) {
  return (
    <ProvideLogin>
      <UserProvider>
        <Head>
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
          ></meta>
        </Head>

        <Header />
        <Component {...pageProps} />

        <ToastContainer />
      </UserProvider>
    </ProvideLogin>
  );
}

export default App;
