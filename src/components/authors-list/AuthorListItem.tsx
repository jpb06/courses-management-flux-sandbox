import React from "react";
import { Link } from "react-router-dom";

interface AuthorItemProps {
  id?: number;
  name: string;
  handleDeletion: (authorId: number) => void;
}

const CourseItem: React.FC<AuthorItemProps> = ({
  id,
  name,
  handleDeletion
}) => {
  const handleClick = () => handleDeletion(id as number);

  return (
    <tr key={id}>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
      </td>
      <td>
        <Link to={`/author/${id}`}>{name}</Link>
      </td>
    </tr>
  );
};

export default CourseItem;
