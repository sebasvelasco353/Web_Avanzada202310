import Cart from "./Cart.jsx"

export default {
    title: 'Cart',
    component: Cart,
    tags: ['autodocs']
};

const Template = (args) => <Cart{...args} />;

export const Open = Template.bind({});
Open.args = {
    handleIsPaying: 'false',
    handleChangeCar: 'false',
    isCartOpenStorybook: true
};

