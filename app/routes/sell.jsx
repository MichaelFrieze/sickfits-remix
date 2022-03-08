import { useActionData, useLoaderData } from 'remix';

import {
  CreateProduct,
  links as createProductStyles,
} from '~/components/create-product';

export let links = () => {
  return [...createProductStyles()];
};

export let loader = () => {
  let initialValues = {
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  };

  return initialValues;
};

export let action = async ({ request }) => {
  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  let reset = 'false';

  if (_action === 'reset') {
    reset = 'true';
    return {
      reset,
    };
  }
};

export default function SellRoute() {
  let actionData = useActionData();
  let loaderData = useLoaderData();
  console.log(loaderData);
  console.log(actionData);

  return (
    <div>
      <CreateProduct initialValues={loaderData} />
    </div>
  );
}
