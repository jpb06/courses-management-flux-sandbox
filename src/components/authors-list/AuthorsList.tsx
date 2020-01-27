import React from "react";
import Author from "../../types/author.type";
import AuthorItem from "./AuthorListItem";

export interface AuthorsListProps {
  authors: Author[];
  handleAuthorDeletion: (authorId: number) => void;
}

const AuthorsList: React.FC<AuthorsListProps> = ({
  authors,
  handleAuthorDeletion
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author: Author) => (
            <AuthorItem
              key={author.id}
              handleDeletion={handleAuthorDeletion}
              {...author}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AuthorsList;
