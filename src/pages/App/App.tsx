import React from 'react';
import logo from '../../assets/logo/logo512.png';
import furryImage from '../../assets/sample_images/furry.jpg';
import hentaiImage from '../../assets/sample_images/hentai.jpg';
import transImage from '../../assets/sample_images/transgender.jpg';
import typhlosionImage from '../../assets/sample_images/typhlosion.jpg';
import typhlosionImageTwo from '../../assets/sample_images/typhlosion_2.png';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

interface IState {
  currentImage: string,
  imageNumber: number,
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentImage: typhlosionImageTwo,
      imageNumber: 0,
    };
  }

  public changeMockedImage = () => {
    let newImage = "";

    switch(this.state.imageNumber) {
      case 0: {
        newImage = typhlosionImage;
        break;
      }
      case 1: {
        newImage = furryImage;
        break;
      }
      case 2: {
        newImage = hentaiImage;
        break;
      }
      case 3: {
        newImage = transImage;
        break;
      }
      case 4: {
        newImage = logo;
        break;
      }
      case 5: {
        newImage = typhlosionImageTwo;
        break;
      }
    }

    this.setState({
      currentImage: newImage,
      imageNumber: this.state.imageNumber == 5 ? 0 : this.state.imageNumber + 1,
    })
  }

  public render() {
    return (
      <div className='App'>
        <div className='App__toolbar'>
          <Toolbar/>
        </div>
        <div className='App__images'>
          <img
            alt='logo a'
            className='App__images__image App__images__image--main'
            src={this.state.currentImage}
            onClick={this.changeMockedImage}
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
