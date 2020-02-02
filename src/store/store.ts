import { createStore } from 'redux';
import reducer from './reducers';

export interface State {
  directoryFiles: string[]
  currentFile: string
}

export const defaultState: State = {
  directoryFiles: [],
  currentFile: '',
};

export default createStore(reducer);
