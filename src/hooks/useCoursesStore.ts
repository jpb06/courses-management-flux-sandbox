import { useEffect, useState } from "react";
import { store as CoursesStore } from "../stores/courses.store";
import * as CoursesActions from "../actions/courses.actions";
import Course from "../types/course.type";

const useCoursesStore = (
  shouldLoadOnStart: boolean = true
): [Course[], React.Dispatch<React.SetStateAction<Course[]>>] => {
  const [courses, setCourses] = useState<Array<Course>>(
    CoursesStore.getCourses()
  );

  useEffect(() => {
    CoursesStore.addChangeListener(onChange);

    if (CoursesStore.getCourses().length === 0 && shouldLoadOnStart) {
      CoursesActions.loadCourses();
    }

    return () => {
      CoursesStore.removeChangeListener(onChange);
    };
  }, [shouldLoadOnStart]);

  const onChange = () => setCourses(CoursesStore.getCourses());

  return [courses, setCourses];
};

export default useCoursesStore;
