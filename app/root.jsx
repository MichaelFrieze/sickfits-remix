import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
  useCatch,
} from 'remix';
import { useEffect } from 'react';
import NProgress from 'nprogress';

import { Layout, links as layoutLinks } from '~/components/layout';

import rootStyles from '~/styles/root.css';
import nprogressStyles from '~/styles/nprogress.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: rootStyles,
    },
    {
      rel: 'stylesheet',
      href: nprogressStyles,
    },
    ...layoutLinks(),
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
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <div className="error">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);

  return (
    <Document>
      <div className="error">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
