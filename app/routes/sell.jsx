import { useActionData } from 'remix';

import { CreateProduct } from '~/components/create-product';

export let action = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);
  return values;
};

export default function SellRoute() {
  let actionData = useActionData();
  console.log(actionData);
  return (
    <div>
      <CreateProduct />
    </div>
  );
}
