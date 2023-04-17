import Header from "./Header.jsx"

export default {
    title: 'Header',
    component: Header,
    tags: ['autodocs']
};

const Template = (args) => <Header{...args} />;

export const Open = Template.bind({});
Open.args = {
    isLoggedInStoryBook: true
};

