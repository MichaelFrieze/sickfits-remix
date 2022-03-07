import { useActionData } from 'remix';

import { CreateProduct } from '~/components/create-product';

export let action = async ({ request }) => {
  // Multiple Forms and Single Button Mutations
  // https://www.youtube.com/watch?v=w2i-9cYxSdc&list=PLXoynULbYuEDG2wBFSZ66b85EIspy3fy6&index=5

  // _action is the name of the button and will be equal to button values
  // For some reason, you cannot use "action" as a name because the browser uses it for other purposes
  // You can use any other name such as "do" or "perform"
  let formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);

  // slowing the action function down to see pending UI easier on the button
  await new Promise((res) => {
    setTimeout(res, 2000);
  });

  if (_action === 'create') {
    console.log(values);
    return values;
  }

  if (_action === 'delete') {
    let text = 'There is nothing to delete since there is no DB!';
    console.log(text);
    return text;
  }

  if (_action === 'hidden') {
    console.log(values);
    return values;
  }
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
