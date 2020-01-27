import Author from "../types/author.type";
import Dispatcher from "../appDispatcher";
import FluxAction from "../types/flux.action";
import ActionTypes from "../actions/action.types";
import BaseStore from "./base.store";

let _authors: Array<Author> = [];

class AuthorsStore extends BaseStore {
  getAuthors = () => _authors;
}

const store = new AuthorsStore();

Dispatcher.register((action: FluxAction) => {
  switch (action.type) {
    // -------------------------------------
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author as Author);
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.LOAD_AUTHORS:
      _authors = action.authors as Array<Author>;
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.UPDATE_AUTHOR:
      _authors = _authors.map(el =>
        el.id === action.author?.id ? (action.author as Author) : el
      );
      store.emitChange();
      break;
    // -------------------------------------
    case ActionTypes.DELETE_AUTHOR:
      _authors = _authors.filter(el => el.id !== action.id);
      store.emitChange();
      break;
  }
});

export { store };
