import { createSelect } from './Select';

export default {
  title: 'Example/Field',
  argTypes: {},
};

const Template = (args) => createSelect(args);

export const Select = Template.bind({});
Select.args = {};
