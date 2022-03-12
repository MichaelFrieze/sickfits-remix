import {
  useActionData,
  useLoaderData,
  unstable_parseMultipartFormData,
  unstable_createMemoryUploadHandler,
} from 'remix';
import { graphqlClient } from '~/utils/graphql-client';
import gql from 'graphql-tag';
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

  const uploadHandler = unstable_createMemoryUploadHandler({
    maxFileSize: 500_000,
  });

  let formData = await unstable_parseMultipartFormData(request, uploadHandler);

  let { image, name, price, description } = Object.fromEntries(formData);

  let values = {
    name,
    price: parseInt(price),
    description,
    // image,
  };

  console.log('Values in action function: ', values);

  let data = await graphqlClient.mutate({
    mutation: CREATE_PRODUCT_MUTATION,
    variables: values,
  });

  return data;
};

export default function SellRoute() {
  let actionData = useActionData();
  let loaderData = useLoaderData();
  console.log('ActionData: ', actionData);

  return (
    <div>
      <CreateProduct initialValues={loaderData} />
    </div>
  );
}
