import React from "react";
import Course from "../../types/course.type";
import TextInput from "../common/TextInput";
import CourseFormErrors from "../../types/forms/course.form.errors";
import Author from "../../types/author.type";
import Dropdown from "../common/Dropdown";

interface CourseFormProps {
  authors: Array<Author>;
  errors: CourseFormErrors;
  course: Course;
  handleChange: (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const CourseForm: React.FC<CourseFormProps> = ({
  authors,
  errors,
  course,
  handleChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        error={errors.title}
        value={course.title}
        handleChange={handleChange}
      />

      <Dropdown
        id="author"
        label="Author"
        name="authorId"
        value={course.authorId}
        handleChange={handleChange}
        options={authors}
        error={errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        error={errors.category}
        value={course.category}
        handleChange={handleChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
