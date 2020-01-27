import dispatcher from "../appDispatcher";
import ActionTypes from "./action.types";

const withLoadingIndicator = (action: any, ...args: any[]): Promise<void> => {
  dispatcher.dispatch({
    type: ActionTypes.STARTED_LOADING
  });

  return action(...args);
};

export default withLoadingIndicator;
