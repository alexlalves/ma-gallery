import React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Toolbar/Toolbar';
import {
  nextImage,
  previousImage,
} from '../../store/actions';
import { State } from '../../store';
import './App.css';

const path = window.require('path');

interface IProps {
  currentFile: string,
  directoryFiles: string[],
  imageNumber: number,

  nextImage: () => object,
  previousImage: () => object,
}

class App extends React.Component<IProps> {
  public extractFilename = () => {
    const { props } = this;
    return path.parse(props.currentFile).base;
  }

  public keyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft': {
        this.changeImageToLeft();
        break;
      }
      case 'ArrowRight': {
        this.changeImageToRight();
        break;
      }
      default: {
        break;
      }
    }
  }

  public changeImageToRight = () => {
    const { props } = this;
    props.nextImage();
  }

  public changeImageToLeft = () => {
    const { props } = this;
    props.previousImage();
  }

  public render() {
    const { props } = this;
    return (
      <div
        className='App'
        onKeyDown={this.keyPress}
        tabIndex={0}
      >
        <div className='App__toolbar'>
          <Toolbar filename={this.extractFilename()} />
        </div>
        <div className='App__images'>
          <img
            alt={props.currentFile}
            className='App__images__image App__images__image--main'
            src={props.currentFile}
          />
          <img
            alt='logo a'
            className='App__images__image App__images__image--background'
            src={props.currentFile}
          />
        </div>
      </div>
    );
  }
}

const MappedState = (state: State) => ({
  currentFile: state.currentFile,
  directoryFiles: state.directoryFiles,
  imageNumber: state.index,
});

const MappedActions = {
  nextImage,
  previousImage,
};

export default connect(
  MappedState,
  MappedActions,
)(App);
