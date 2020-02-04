import { ActionTypes, FilesActions } from './actions';
import { State, defaultState } from '.';

const filesReducer = (
  state: State = defaultState, action: FilesActions,
): State => {
  switch (action.type) {
    case ActionTypes.DecrementFileIndex: {
      const fileCount = state.directoryFiles.length;
      const { index } = state;

      const decrementedIndex = index === 0 ? fileCount - 1 : index - 1;

      return {
        ...state,
        index: decrementedIndex,
        currentFile: state.directoryFiles[decrementedIndex],
      };
    }

    case ActionTypes.IncrementFileIndex: {
      const fileCount = state.directoryFiles.length;
      const { index } = state;

      const incrementedIndex = index === fileCount - 1 ? 0 : index + 1;

      return {
        ...state,
        index: incrementedIndex,
        currentFile: state.directoryFiles[incrementedIndex],
      };
    }

    case ActionTypes.UpdateDirectoryFiles: {
      const newIndex = action.images.indexOf(state.currentFile);

      return {
        ...state,
        directoryFiles: action.images,
        index: newIndex,
      };
    }

    case ActionTypes.UpdateCurrentFile: {
      const newIndex = state.directoryFiles.indexOf(action.image);

      return {
        ...state,
        currentFile: action.image,
        index: newIndex,
      };
    }

    default: {
      return state;
    }
  }
};

export default filesReducer;
