import { IDropdown } from './Dropdown';

const base: IDropdown = {
  name: 'task-types',
  options: [
    {value: 'all', label: "All"},
    {value: 'HTML', label: "HTML"},
    {value: 'CSS', label: "CSS"},
    {value: 'JavaScript', label: "JavaScript"},
    {value: 'Angular', label: "Angular"},
    {value: 'React', label: "React"},
  ]
};

export const mockDropdownProps = {
  base,
};
