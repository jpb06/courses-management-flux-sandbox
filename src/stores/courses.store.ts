import Dispatcher from "../appDispatcher";
import ActionTypes from "../actions/action.types";
import FluxAction from "../types/flux.action";
import Course from "../types/course.type";
import BaseStore from "./base.store";

let _courses: Array<Course> = [];

class CourseStore extends BaseStore {
  getCourses = () => _courses;
  getCoursesBySlug = (slug: string) => _courses.find(el => el.slug === slug);
}

const store = new CourseStore();

Dispatcher.register((action: FluxAction) => {
  switch (action.type) {
    // -------------------------------------
    case ActionTypes.CREATE_COURSE:
      _courses.push(action.course as Course);
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.LOAD_COURSES:
      _courses = action.courses as Array<Course>;
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.UPDATE_COURSE:
      _courses = _courses.map(el =>
        el.id === action.course?.id ? (action.course as Course) : el
      );
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.DELETE_COURSE:
      _courses = _courses.filter(el => el.id !== action.id);
      store.emitChange();
      break;
  }
});

export { store };
