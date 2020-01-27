import dispatcher from "../appDispatcher";
import Course from "../types/course.type";
import * as CoursesApi from "../api/course.api";
import ActionTypes from "./action.types";
import withLoadingIndicator from "./with.loading.indicator";

const _saveCourse = (course: Course) =>
  CoursesApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      type: course.id ? ActionTypes.UPDATE_COURSE : ActionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });

const _loadCourses = () =>
  CoursesApi.getCourses().then(data => {
    dispatcher.dispatch({
      type: ActionTypes.LOAD_COURSES,
      courses: data
    });
  });

const _deleteCourse = (id: number) =>
  CoursesApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      type: ActionTypes.DELETE_COURSE,
      id
    });
  });

const saveCourse = (course: Course) =>
  withLoadingIndicator(_saveCourse, course);
const loadCourses = () => withLoadingIndicator(_loadCourses);
const deleteCourse = (id: number) => withLoadingIndicator(_deleteCourse, id);

export { saveCourse, loadCourses, deleteCourse };
