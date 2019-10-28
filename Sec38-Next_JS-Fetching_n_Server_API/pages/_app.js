// This file is modified based on: 
// - Custom '<App>':  https://nextjs.org/docs#custom-app

import React from 'react';
import App, { Container } from 'next/app';
import Navbar from "../components/Navbar";

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await App.getInitialProps(ctx);
    }
  
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
     
    return (
      <Container>
        {/* Put <Navbar /> in <Container>, <Navbar /> will be in all pages */}
        <Navbar />

        {/* Whatever page we are visiting, ie. index.js or about.js, {...pageProps} will be the page */}
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp