import ActionTypes from "../actions/action.types";
import Course from "./course.type";
import Author from "./author.type";

export default interface FluxAction {
  type: ActionTypes;
  course?: Course;
  courses?: Array<Course>;
  id?: number;
  author?: Author;
  authors?: Array<Author>;
}
