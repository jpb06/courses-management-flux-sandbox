import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import Author from "../../types/author.type";
import { toast } from "react-toastify";
import * as AuthorActions from "../../actions/authors.actions";
import useAuthorsStore from "../../hooks/useAuthorsStore";
import useLoadingStore from "../../hooks/useLoadingStore";
import Loading from "../common/Loading";
import useFormErrors from "../../hooks/useFormErrors";
import AuthorFormErrors, {
  requiredFields
} from "../../types/forms/author.form.errors";

interface ManageAuthorParams {
  id: string;
}

const ManageAuthorPage: React.FC<RouteComponentProps<ManageAuthorParams>> = ({
  match
}) => {
  const isEditMode = match.params.id !== undefined;

  const history = useHistory();
  const [isLoading] = useLoadingStore();
  const [authors] = useAuthorsStore(isEditMode);

  const [author, setAuthor] = useState<Author>({
    name: ""
  });
  const [errors, isFormValid] = useFormErrors<AuthorFormErrors>(
    author,
    requiredFields
  );

  useEffect(() => {
    const id = match.params.id; // from the path '/author/:id'
    if (id) {
      const requestedAuthor = authors.find(el => el.id?.toString() === id);
      if (requestedAuthor) {
        setAuthor(requestedAuthor);
      }
      if (authors.length > 0 && !requestedAuthor) {
        history.push("/error");
      }
    }
  }, [authors, match.params.id, history]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setAuthor({
      ...author,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!isFormValid()) return;

    await AuthorActions.saveAuthor(author);

    history.push("/authors");
    toast.success("Author saved.");
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h2>Manage Author</h2>
        <AuthorForm
          errors={errors}
          author={author}
          handleChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    );
  }
};

export default ManageAuthorPage;
