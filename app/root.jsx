import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from 'remix';
import { useEffect } from 'react';
import NProgress from 'nprogress';

import Layout from '~/components/layout';

import globalStyles from '~/styles/global.css';
import nprogressStyles from '~/styles/nprogress.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles,
    },
    {
      rel: 'stylesheet',
      href: nprogressStyles,
    },
  ];
};

export function meta() {
  const description = 'Remix eCommerce store';
  const keywords = 'Sick Fits Clothes Shopping Remix KeystoneJS';
  const title = 'Sick Fits';
  return {
    description,
    keywords,
    title,
  };
}

export default function App() {
  const transition = useTransition();

  useEffect(() => {
    if (transition.state === 'loading' || transition.state === 'submitting') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
