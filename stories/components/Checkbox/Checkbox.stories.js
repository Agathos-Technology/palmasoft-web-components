import { createCheckbox } from './Checkbox';

export default {
  title: 'Example/Field',
  argTypes: {},
};

const Template = (args) => createCheckbox(args);

export const Checkbox = Template.bind({});
Checkbox.args = {};
