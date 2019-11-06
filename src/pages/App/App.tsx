import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

const path = window.require('path');

let images = [
  '',
];

interface IState {
  currentImage: string,
  imageNumber: number,
}

interface IProps {
  openedFile: string,
  files: string[],
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
      currentImage: props.openedFile,
      imageNumber: indexOfFile(props.openedFile, props.files),
    };

    images = props.files;
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
    const { state } = this;
    const newImageNumber = state.imageNumber === images.length - 1 ? 0 : state.imageNumber + 1;

    this.setState({
      currentImage: images[newImageNumber],
      imageNumber: newImageNumber,
    });
  }

  public changeMockedImageToLeft = () => {
    const { state } = this;
    const newImageNumber = state.imageNumber === 0 ? images.length - 1 : state.imageNumber - 1;

    this.setState({
      currentImage: images[newImageNumber],
      imageNumber: newImageNumber,
    });
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
            alt={props.openedFile}
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

export default App;
