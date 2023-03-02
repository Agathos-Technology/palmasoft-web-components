import { createCheckbox } from './Radio';

export default {
  title: 'Example/Field',
  argTypes: {},
};

const Template = (args) => createCheckbox(args);

export const Radio = Template.bind({});
Radio.args = {};
