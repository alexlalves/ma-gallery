import { actionTypes } from './actions';

interface Action {
  type: actionTypes
  files?: string[]
}

interface State {
  files?: string[]
}

const filesReducer = (state: State = {}, action: Action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILES: {
      console.log(actionTypes.UPDATE_FILES);
      console.log(action.files);

      return {
        ...state,
        files: action.files,
      };
    }
    default: {
      return state;
    }
  }
};

export default filesReducer;
