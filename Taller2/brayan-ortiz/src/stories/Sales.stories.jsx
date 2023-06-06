import React from 'react';
import { storiesOf } from '@storybook/react';
import AddProduct from '../components/sales/AddProduct.jsx';

// Story for the AddProduct component
storiesOf('AddProduct', module)
  .add('Default', () => (
    <AddProduct
      isVisible={true}
      changeVisible={() => {}}
    />
  ));
