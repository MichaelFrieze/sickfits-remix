import { Form, useTransition } from 'remix';

export let CreateProduct = () => {
  let transition = useTransition();
  let busy = transition.submission;
  let isCreating =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'create';
  let isDeleting =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'delete';

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
        <button
          disabled={isCreating}
          type="submit"
          name="_action"
          value="create"
        >
          {isCreating ? "I'm creating..." : 'create'}
        </button>{' '}
        <button
          disabled={isDeleting}
          type="submit"
          name="_action"
          value="delete"
        >
          {isDeleting ? "I'm deleting..." : 'delete'}
        </button>{' '}
        <button type="submit" name="_action" value="error">
          error
        </button>
      </Form>
      <br />
      <Form method="post">
        <input type="hidden" name="myName" value={myName} />
        <button disabled={busy} type="submit" name="_action" value="hidden">
          {busy ? "I'm busy..." : 'hidden input'}
        </button>
      </Form>
    </>
  );
};
