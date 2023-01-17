import { ChangeEventHandler } from "react";

export interface IDropdown {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: {value: string, label: string}[];
}

const Dropdown: React.FC<IDropdown> = ({ name, options, value, onChange }) => {
  return <select name={name} onChange={onChange} value={value}>
    {
      options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)
    }
</select>
;
};

export default Dropdown;
