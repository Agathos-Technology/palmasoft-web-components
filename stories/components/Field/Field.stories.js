import { createField } from './Field';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Field',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    onChange: { action: 'onChange' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

const Template = (args) => createField(args);

export const Text = Template.bind({});
Text.args = {};

export const Number = Template.bind({});
Number.args = {};

export const Email = Template.bind({});
Email.args = {};
