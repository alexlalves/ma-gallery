import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

let images = [
  ''
];

interface IState {
  currentImage: string,
  imageNumber: number,
}

interface IProps {
  openedFile: string,
  files: string[],
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentImage: props.openedFile,
      imageNumber: 0,
    };

    images = props.files;
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
      }
    }

  public changeMockedImageToRight = () => {
    let newImageNumber = this.state.imageNumber === images.length - 1 ? 0 : this.state.imageNumber + 1;

    this.setState({
      currentImage: images[newImageNumber],
      imageNumber: newImageNumber,
    });
  }

  public changeMockedImageToLeft = () => {
    let newImageNumber = this.state.imageNumber === 0 ? images.length - 1 : this.state.imageNumber - 1;

    this.setState({
      currentImage: images[newImageNumber],
      imageNumber: newImageNumber,
    });
  }

  public render() {
    return (
      <div className='App' onKeyDown={this.keyPress} tabIndex={0}>
        <div className='App__toolbar'>
          <Toolbar/>
        </div>
        <div className='App__images'>
          <img
            alt={this.props.openedFile}
            className='App__images__image App__images__image--main'
            src={this.state.currentImage}
          />
          <img
            alt='logo a'
            className='App__images__image App__images__image--background'
            src={this.state.currentImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
