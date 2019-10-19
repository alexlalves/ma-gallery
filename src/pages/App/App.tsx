import React from 'react';
import logo from '../../assets/logo/logo512.png';
import furryImage from '../../assets/sample_images/furry.jpg';
import hentaiImage from '../../assets/sample_images/hentai.jpg';
import transImage from '../../assets/sample_images/transgender.jpg';
import typhlosionImage from '../../assets/sample_images/typhlosion.jpg';
import typhlosionImageTwo from '../../assets/sample_images/typhlosion_2.png';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

const images = [
  logo,
  typhlosionImage,
  typhlosionImageTwo,
  furryImage,
  hentaiImage,
  transImage,
];

interface IState {
  currentImage: string,
  imageNumber: number,
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentImage: logo,
      imageNumber: 0,
    };
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

  public render() {
    return (
      <div className='App' onKeyDown={this.keyPress} tabIndex={0}>
        <div className='App__toolbar'>
          <Toolbar/>
        </div>
        <div className='App__images'>
          <img
            alt='logo a'
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
