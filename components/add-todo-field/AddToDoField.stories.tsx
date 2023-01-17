import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddToDoField, { IAddToDoField } from './AddToDoField';
import { mockAddToDoFieldProps } from './AddToDoField.mocks';

export default {
  title: 'AddToDoField',
  component: AddToDoField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AddToDoField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddToDoField> = (args) => (
  <AddToDoField {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAddToDoFieldProps.base,
} as IAddToDoField;
