import Dispatcher from "./../appDispatcher";
import BaseStore from "./base.store";
import FluxAction from "../types/flux.action";
import ActionTypes from "../actions/action.types";

let _isLoading = false;

class ApplicationStateStore extends BaseStore {
  isLoading = () => _isLoading;
}

const store = new ApplicationStateStore();

Dispatcher.register((action: FluxAction) => {
  switch (action.type) {
    case ActionTypes.STARTED_LOADING:
      _isLoading = true;
      store.emitChange();
      break;
    case ActionTypes.LOAD_COURSES:
    case ActionTypes.LOAD_AUTHORS:
    case ActionTypes.CREATE_COURSE:
    case ActionTypes.UPDATE_COURSE:
    case ActionTypes.DELETE_COURSE:
    case ActionTypes.CREATE_AUTHOR:
    case ActionTypes.UPDATE_AUTHOR:
    case ActionTypes.DELETE_AUTHOR:
      _isLoading = false;
      store.emitChange();
      break;
  }
});

export { store };
