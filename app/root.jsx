import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import globalStyles from '~/styles/global.css';
import Layout from '~/components/layout';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyles,
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
