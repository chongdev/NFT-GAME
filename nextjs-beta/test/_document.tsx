import Document, { Html, Head, Main, NextScript } from 'next/document'

import "../assets/fonts/kg-dancing-on-the-rooftop/KGDancingOnTheRooftop.css";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument