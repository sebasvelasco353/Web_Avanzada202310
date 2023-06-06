import React from "react";
import { Story } from "@storybook/react";
import Login from "../components/Login/logIn";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    onLogin: { action: "onLogin" },
  },
};

const Template: Story = (args) => <Login {...args} />;
export const Default = Template.bind({});
Default.args = {
  user: null,
  onLogin: (loggedIn) => console.log("Logged in:", loggedIn),
};
