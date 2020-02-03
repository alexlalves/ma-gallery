import { createStore } from 'redux';
import reducers from './reducers';

export interface State {
  currentFile: string
  directoryFiles: string[]
  index: number,
}

export const defaultState: State = {
  currentFile: '',
  directoryFiles: [],
  index: 0,
};

export default createStore(reducers);
