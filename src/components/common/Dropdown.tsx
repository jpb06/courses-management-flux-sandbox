import React from "react";

interface DropdownOption {
  id?: string | number;
  name: string;
}

interface DropdownProps {
  id: string;
  label: string;
  name: string;
  value?: string | number;
  error?: string;
  handleChange: (event: React.FormEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  name,
  value,
  error = "",
  handleChange,
  options
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <select
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          className="form-control"
        >
          <option value="" />
          {options.map(el => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
