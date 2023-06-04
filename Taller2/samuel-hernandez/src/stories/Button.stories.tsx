import Button, {PropsType} from "../components/ui/Button/Button"
import {Meta, StoryFn} from "@storybook/react";

export default {
    title: "Button",
    component: Button
} as Meta;

const Template: StoryFn<PropsType> = (args : PropsType) => <Button {...args} />

export const Large = Template.bind({});
Large.args = {
    color: "primary",
    className: "button button__large",
    label: "Large"
}

export const Default = () => {
    return <Button color={"primary"} className={"button button__small"} label={"Small"}/>
}