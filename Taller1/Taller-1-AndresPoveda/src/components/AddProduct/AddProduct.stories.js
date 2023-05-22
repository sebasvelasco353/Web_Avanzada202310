import AddProduct  from "./AddProduct.jsx"

export default {
  title: 'AddProductSection',
  component: AddProduct,
  tags: ['autodocs']
};

 const Template = (args) => <AddProduct{...args} />;

export const Open = Template.bind({});
Open.args = {
  modalStateProp: true,
  isAdmin: "Yes"
};

export const Closed = Template.bind({});
Closed.args = {
  modalStateProp: false,
   isAdmin: "No"
};

