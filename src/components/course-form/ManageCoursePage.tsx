import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import CourseForm from "./CourseForm";
import Course from "../../types/course.type";
import { toast } from "react-toastify";
import * as CoursesActions from "../../actions/courses.actions";
import useCoursesStore from "../../hooks/useCoursesStore";
import useAuthorsStore from "../../hooks/useAuthorsStore";
import useLoadingStore from "../../hooks/useLoadingStore";
import Loading from "../common/Loading";
import useFormErrors from "../../hooks/useFormErrors";
import CourseFormErrors, {
  requiredFields
} from "../../types/forms/course.form.errors";

interface ManageCourseParams {
  slug: string;
}

const ManageCoursePage: React.FC<RouteComponentProps<ManageCourseParams>> = ({
  match
}) => {
  const isEditMode = match.params.slug !== undefined;

  const history = useHistory();
  const [isLoading] = useLoadingStore();
  const [courses] = useCoursesStore(isEditMode);
  const [authors] = useAuthorsStore(isEditMode);

  const [course, setCourse] = useState<Course>({
    slug: "",
    title: "",
    category: ""
  });
  const [errors, isFormValid] = useFormErrors<CourseFormErrors>(
    course,
    requiredFields
  );

  useEffect(() => {
    const slug = match.params.slug; // from the path '/courses/:slug'
    if (slug) {
      const requestedCourse = courses.find(el => el.slug === slug);
      if (requestedCourse) {
        setCourse(requestedCourse);
      }
      if (courses.length > 0 && !requestedCourse) {
        history.push("/error");
      }
    }
  }, [courses, match.params.slug, history]);

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const value =
      event.currentTarget.name === "authorId"
        ? event.currentTarget.value
          ? parseInt(event.currentTarget.value, 10)
          : ""
        : event.currentTarget.value;

    setCourse({
      ...course,
      [event.currentTarget.name]: value
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!isFormValid()) return;

    await CoursesActions.saveCourse(course);

    history.push("/courses");
    toast.success("Course saved.");
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h2>Manage Course</h2>
        <CourseForm
          authors={authors}
          errors={errors}
          course={course}
          handleChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    );
  }
};

export default ManageCoursePage;
