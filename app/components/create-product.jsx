import { Form } from 'remix';

export let CreateProduct = () => {
  let myName = 'Michael Frieze';
  return (
    <>
      <Form method="post">
        <label htmlFor="product-name">
          Product Name:{' '}
          <input
            type="text"
            id="product-name"
            name="productName"
            placeholder="enter product name"
          />
        </label>
        <br />
        <label htmlFor="price">
          Price:{' '}
          <input
            type="number"
            id="price"
            name="productPrice"
            placeholder="enter product price"
          />
        </label>
        <br />
        <button type="submit" name="_action" value="create">
          create
        </button>{' '}
        <button type="submit" name="_action" value="delete">
          delete
        </button>{' '}
        <button type="submit" name="_action" value="error">
          error
        </button>
      </Form>
      <br />
      <Form method="post">
        <input type="hidden" name="myName" value={myName} />
        <button type="submit" name="_action" value="hidden">
          hidden
        </button>
      </Form>
    </>
  );
};
