import { Form } from 'remix';

export let CreateProduct = () => {
  return (
    <Form method="post">
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" />
      </label>
      <label htmlFor="price">
        Price
        <input type="number" id="price" name="price" placeholder="price" />
      </label>

      <button type="submit">submit</button>
    </Form>
  );
};
