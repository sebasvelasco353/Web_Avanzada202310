import React from "react";
import { Meta, Story } from "@storybook/react";
import InCart from "../components/Cart/mangasInCart";

// Datos de ejemplo para el carrito
const cartItems = [
  {
    id: 1,
    image: "https://images.cdn2.buscalibre.com/fit-in/360x360/df/e1/dfe1b568679a9141ff115ce270cf9069.jpg",
    Nombre: "El libro de los insectos humanos",
    Precio: 38700,
    Cantidad: 2,
    Disponible: true,
  },
];

const handleDelete = (product) => {
  console.log('Producto eliminado:', product);
};

export default {
  title: "Components/InCart",
  component: InCart,
  argTypes: {
    cart: { control: "object" },
    handleDelete: { action: "handleDelete" },
  },
};

const Template = (args) => <InCart {...args} />;
export const Default = Template.bind({});
Default.args = {
  cart: cartItems,
  handleDelete: handleDelete,
};
