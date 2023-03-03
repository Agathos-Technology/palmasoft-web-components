import { createCheckbox, createRadio } from './Radio';

export default {
  title: 'Example/Field',
  argTypes: {},
};

const Template = (args) => createRadio(args);

export const Radio = Template.bind({});
Radio.args = {};
