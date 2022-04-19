import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import {Head} from "next/document";
const NProgress = require("nprogress")

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  return <Component {...pageProps} />
}

export default MyApp
