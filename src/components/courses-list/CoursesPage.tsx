import React from "react";
import CourseList from "./CourseList";
import * as CoursesActions from "../../actions/courses.actions";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useCoursesStore from "../../hooks/useCoursesStore";
import useAuthorsStore from "../../hooks/useAuthorsStore";
import useLoadingStore from "../../hooks/useLoadingStore";
import Loading from "../common/Loading";

const CoursesPage: React.FC = () => {
  const [isLoading] = useLoadingStore();
  const [courses] = useCoursesStore();
  const [authors] = useAuthorsStore();

  const handleCourseDeletion = (id: number) => {
    CoursesActions.deleteCourse(id);
    toast.success("Course deleted.");
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">
          Add course
        </Link>
        <CourseList
          courses={courses}
          authors={authors}
          handleCourseDeletion={handleCourseDeletion}
        />
      </>
    );
  }
};

export default CoursesPage;
