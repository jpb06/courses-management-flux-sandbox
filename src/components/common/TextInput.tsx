import React from "react";

interface TextInputProps {
  id: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  name,
  value,
  error = "",
  handleChange
}) => {
  let wrapperClass = "form-group";
  if (error.length > 0) wrapperClass += " has-error";

  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          id={id}
          type="text"
          onChange={handleChange}
          name={name}
          className="form-control"
          value={value}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
