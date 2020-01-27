import React from "react";
import AuthorsList from "./AuthorsList";
import * as AuthorsActions from "../../actions/authors.actions";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthorsStore from "../../hooks/useAuthorsStore";
import useLoadingStore from "../../hooks/useLoadingStore";
import Loading from "../common/Loading";

const AuthorsPage: React.FC = () => {
  const [isLoading] = useLoadingStore();
  const [authors] = useAuthorsStore();

  const handleAuthorsDeletion = (id: number) => {
    AuthorsActions.deleteAuthor(id);
    toast.success("Author deleted.");
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h2>Authors</h2>
        <Link className="btn btn-primary" to="/author">
          Add Author
        </Link>
        <AuthorsList
          authors={authors}
          handleAuthorDeletion={handleAuthorsDeletion}
        />
      </>
    );
  }
};

export default AuthorsPage;
