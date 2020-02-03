import React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Toolbar/Toolbar';
import { updateCurrentImage } from '../../store/actions';
import { State } from '../../store';
import './App.css';

const path = window.require('path');

interface IState {
  currentImage: string,
  imageNumber: number,
}

interface IProps {
  currentFile: string,
  directoryFiles: string[],

  updateCurrentImage: (file: string) => object,
}

function indexOfFile(file: string, fileArray: string[]): number {
  const fileName = path.parse(file).base;
  const nameArray = fileArray.map((element) => path.parse(element).base);

  return nameArray.indexOf(fileName);
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentImage: props.currentFile,
      imageNumber: indexOfFile(props.currentFile, props.directoryFiles),
    };
  }

  public extractFilename = () => {
    const { state } = this;
    return path.parse(state.currentImage).base;
  }

  public keyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft': {
        this.changeMockedImageToLeft();
        break;
      }
      case 'ArrowRight': {
        this.changeMockedImageToRight();
        break;
      }
      default: {
        break;
      }
    }
  }

  public changeMockedImageToRight = () => {
    const {
      props,
      state,
    } = this;
    const newImageNumber = state.imageNumber === props.directoryFiles.length - 1 ? 0 : state.imageNumber + 1;

    this.setState({
      currentImage: props.directoryFiles[newImageNumber],
      imageNumber: newImageNumber,
    });

    props.updateCurrentImage(props.directoryFiles[newImageNumber]);
  }

  public changeMockedImageToLeft = () => {
    const {
      props,
      state,
    } = this;
    const newImageNumber = state.imageNumber === 0 ? props.directoryFiles.length - 1 : state.imageNumber - 1;

    this.setState({
      currentImage: props.directoryFiles[newImageNumber],
      imageNumber: newImageNumber,
    });

    props.updateCurrentImage(props.directoryFiles[newImageNumber]);
  }

  public render() {
    const { props, state } = this;
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
            src={state.currentImage}
          />
          <img
            alt='logo a'
            className='App__images__image App__images__image--background'
            src={state.currentImage}
          />
        </div>
      </div>
    );
  }
}

const MappedState = (state: State) => ({
  currentFile: state.currentFile,
  directoryFiles: state.directoryFiles,
});

const MappedActions = {
  updateCurrentImage,
};

export default connect(
  MappedState,
  MappedActions,
)(App);
