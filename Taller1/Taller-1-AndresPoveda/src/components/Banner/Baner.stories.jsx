import Banner from "./Banner.jsx"

export default {
    title: 'Banner',
    component: Banner,
    tags: ['autodocs']
};

const Template = (args) => <Banner{...args} />;

export const Open = Template.bind({});
Open.args = {  
    State: 'open'
};

