import { useLoaderData } from 'remix';
import Products from '~/components/products';
import productStyles from '~/styles/products.css';

export let links = () => {
  return [
    {
      rel: 'stylesheet',
      href: productStyles,
    },
  ];
};

export let meta = () => {
  return {
    title: 'Sick Fits | Products',
    description: 'Using GraphQL to get products!',
  };
};

export { loader } from '~/routes/api/products';

export default function ProductsRoute() {
  let data = useLoaderData();

  return (
    <div>
      <p>just returning some data:</p>
      <Products data={data} />
    </div>
  );
}

/* 
Some notes about slow loader function and caching

1. cache the data before accessing it in loader function
2. or fetch the data on the client side

That's how Remix works. It will call all loaders for the route in parallel. It won't render the new route until all loaders return. This emulates what the browser would do, since the server would need all the data to build the page.

If you loader is slow, then you need to either cache the results on the server, and return that. Or don't call the API from the server, but call it from the client and display a spinner.

Some other types of caching to speed things up:
you can set cache header to loader too
export function loader() {
  return json(data, {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  })
}

and in the header function
export const headers({loaderHeaders}) {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control')
  }
}

this way the loader (API), and the "page" headers will have the same cache rules 



*/
