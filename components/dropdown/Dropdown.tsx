
export interface IDropdown {
  name: string;
  options: {value: string, label: string}[],
}

const Dropdown: React.FC<IDropdown> = ({ name, options }) => {
  return <select name={name}>
    {
      options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)
    }
</select>
;
};

export default Dropdown;
