import React from "react";
import { Meta, Story } from "@storybook/react";
import Catalogue from "../components/Manga/manga";

const mangaItems = [
  {
    id: 1,
    image: "https://images.cdn2.buscalibre.com/fit-in/360x360/df/e1/dfe1b568679a9141ff115ce270cf9069.jpg",
    Nombre: "El libro de los insectos humanos",
    Precio: 38700,
    Cantidad: 2,
    Disponible: true,
  },
  
];

const addToCart = (manga) => {
  console.log("Manga agregado al carrito:", manga);
};

export default {
  title: "Components/Catalogue",
  component: Catalogue,
  argTypes: {
    addToCart: { action: "addToCart" },
  },
};

const Template: Story = (args) => <Catalogue {...args} />;
export const Default = Template.bind({});
Default.args = {
  mangaItems: mangaItems,
  addToCart: addToCart,
};