import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown, { IDropdown } from './Dropdown';
import { mockDropdownProps } from './Dropdown.mocks';

export default {
  title: 'Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDropdownProps.base,
} as IDropdown;
