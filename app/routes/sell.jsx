import {
  useActionData,
  useLoaderData,
  unstable_parseMultipartFormData,
  unstable_createFileUploadHandler,
  useTransition,
} from 'remix';

import {
  CreateProduct,
  links as createProductStyles,
} from '~/components/create-product';

export let links = () => {
  return [...createProductStyles()];
};

export let loader = () => {
  let initialValues = {
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!',
  };

  return initialValues;
};

export let action = async ({ request }) => {
  const uploadHandler = unstable_createFileUploadHandler({
    maxFileSize: 5_000_000,
    file: ({ filename }) => filename,
  });

  let formData = await unstable_parseMultipartFormData(request, uploadHandler);
  // let formData = await request.formData();

  let { _action, ...values } = Object.fromEntries(formData);

  console.log(values);

  return values;
};

export default function SellRoute() {
  let actionData = useActionData();
  let loaderData = useLoaderData();
  // console.log(loaderData);
  console.log(actionData);
  console.log(useTransition());

  return (
    <div>
      <CreateProduct initialValues={loaderData} />
    </div>
  );
}
