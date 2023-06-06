import {Button, IPropTypes} from "../components/ui/Button/Button"
import {Meta, StoryFn} from "@storybook/react";
import material from "../helpers/material";
import {SxProps, Theme} from "@mui/material";

export default {
    title: "Button",
    component: Button
} as Meta;

const Template: StoryFn<IPropTypes> = (args : IPropTypes) => <Button {...args} />

export const Large = Template.bind({});
Large.args = {
    sxProps: {
        color: material("red")[100],
    },
    color: "primary",
    className: "button button__large",
    children: "Large"
}

export const Normal = Template.bind({});
Normal.args = {
    sxProps: {
        color: material("red")[100]
    },
    className: "button button__normal",
    children: "Small"
}