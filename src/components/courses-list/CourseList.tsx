import React from "react";
import Course from "../../types/course.type";
import CourseItem from "./CourseListItem";
import Author from "../../types/author.type";

export interface CourseListProps {
  courses: Course[];
  authors: Author[];
  handleCourseDeletion: (courseId: number) => void;
}

const CourseList: React.FC<CourseListProps> = ({
  courses,
  authors,
  handleCourseDeletion
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((el: Course) => (
            <CourseItem
              key={el.id}
              course={el}
              author={authors.find(author => author.id === el.authorId)}
              handleDeletion={handleCourseDeletion}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CourseList;
