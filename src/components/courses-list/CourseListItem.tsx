import React from "react";
import { Link } from "react-router-dom";
import Course from "../../types/course.type";
import Author from "../../types/author.type";

interface CourseItemProps {
  course: Course;
  author?: Author;
  handleDeletion: (courseId: number) => void;
}

const CourseItem: React.FC<CourseItemProps> = ({
  course,
  author,
  handleDeletion
}) => {
  const handleClick = () => handleDeletion(course.id as number);

  return (
    <tr key={course.id}>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
      </td>
      <td>
        <Link to={`/course/${course.slug}`}>{course.title}</Link>
      </td>
      <td>{author ? author.name : "Unknown"}</td>
      <td>{course.category}</td>
    </tr>
  );
};

export default CourseItem;
