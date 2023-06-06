import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from '../components/product/Product.jsx';

// Story for the Product component
storiesOf('Product', module)
  .add('Default', () => (
    <Product
      name="Product Name"
      price="19.99"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      active={true}
    />
  ))
  .add('With Alert', () => (
    <Product
      name="Product Name"
      price="19.99"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      active={true}
      showAlert={true}
    />
  ))
  .add('Without Actions', () => (
    <Product
      name="Product Name"
      price="19.99"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      active={false}
    />
  ));