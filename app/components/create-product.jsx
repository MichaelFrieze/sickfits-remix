import { Form, useTransition } from 'remix';

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
