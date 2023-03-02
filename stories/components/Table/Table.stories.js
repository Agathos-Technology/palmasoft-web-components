import { createTable } from './Table';

export default {
  title: 'Example/Table',
  argTypes: {},
};

const Template = (args) => createTable(args);

export const Default = Template.bind({});
Default.args = {};
