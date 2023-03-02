import { createBox } from './Box';

export default {
  title: 'Example/Box',
  argTypes: {},
};

const Template = (args) => createBox(args);

export const Default = Template.bind({});
Default.args = {};
