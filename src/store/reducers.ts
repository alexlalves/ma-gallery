import { ActionTypes, Actions } from './actions';
import { State, defaultState } from './store';

const filesReducer = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.UpdateDirectoryFiles: {
      return {
        ...state,
        directoryFiles: action.files,
      };
    }
    default: {
      return state;
    }
  }
};

export default filesReducer;
