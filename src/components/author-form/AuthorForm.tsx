import React from "react";
import TextInput from "../common/TextInput";
import Author from "../../types/author.type";
import AuthorFormErrors from "../../types/forms/author.form.errors";

interface AuthorFormProps {
  errors: AuthorFormErrors;
  author: Author;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const AuthorForm: React.FC<AuthorFormProps> = ({
  errors,
  author,
  handleChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="name"
        label="Name"
        name="name"
        error={errors.name}
        value={author.name}
        handleChange={handleChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default AuthorForm;
