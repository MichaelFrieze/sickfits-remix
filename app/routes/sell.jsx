import {
  useActionData,
  useLoaderData,
  unstable_parseMultipartFormData,
  unstable_createFileUploadHandler,
  useTransition,
} from 'remix';
import { gql } from 'graphql-request';
import { client } from '~/utils/graphql-client';
import {
  CreateProduct,
  links as createProductStyles,
} from '~/components/create-product';

export let links = () => {
  return [...createProductStyles()];
};

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $price: Int!
    $description: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export let loader = () => {
  let initialValues = {
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

  let { _action, name, price, description } = Object.fromEntries(formData);

  let values = {
    name,
    price: parseInt(price),
    description,
  };

  console.log('values: ', values);
  console.log('action: ', _action);

  let data = await client.request(CREATE_PRODUCT_MUTATION, values);

  console.log(data);

  return data;
};

export default function SellRoute() {
  let actionData = useActionData();
  let loaderData = useLoaderData();
  // console.log(loaderData);
  console.log(actionData);

  return (
    <div>
      <CreateProduct initialValues={loaderData} />
    </div>
  );
}
