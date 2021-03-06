import { Form } from 'remix';

import formStyles from '~/styles/components/form.css';

export let links = () => [{ rel: 'stylesheet', href: formStyles }];

export let CreateProduct = ({ initialValues }) => {
  return (
    <Form method="post" className="form" encType="multipart/form-data">
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            defaultValue={initialValues.name}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            defaultValue={initialValues.price}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            defaultValue={initialValues.description}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
};

/* import { useRef, useEffect } from 'react';
import { Form, useTransition } from 'remix';

export let CreateProduct = () => {
  let transition = useTransition();
  let busy = transition.submission;
  let isAddingName =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'addingName';
  let isCreating =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'create';
  let isDeleting =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'delete';

  let hiddenValue = 'Some hidden text';

  let formRef = useRef();
  let firstNameRef = useRef();

  useEffect(() => {
    if (!isAddingName) {
      formRef.current?.reset();
      firstNameRef.current?.focus();
    }
  }, [isAddingName]);

  return (
    <>
      <Form replace method="post">
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
      <Form ref={formRef} replace method="post">
        <input
          ref={firstNameRef}
          type="text"
          name="firstName"
          placeholder="First Name"
        />{' '}
        <input type="text" name="lastName" placeholder="Last Name" />{' '}
        <button disabled={busy} type="submit" name="_action" value="addingName">
          {isAddingName ? "I'm adding name..." : 'add name'}
        </button>
      </Form>
      <br />
      <Form replace method="post">
        <input type="hidden" name="hiddenValue" value={hiddenValue} />
        <button disabled={busy} type="submit" name="_action" value="hidden">
          {busy ? "I'm busy..." : 'hidden input'}
        </button>
      </Form>
    </>
  );
};
 */
