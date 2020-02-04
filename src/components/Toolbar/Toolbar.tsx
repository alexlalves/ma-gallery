import React from 'react';
import logo from '../../assets/logo/logo_light.svg';
import burger from '../../assets/icons/burger_light.svg';
import './Toolbar.css';
import ToolbarMenu from '../ToolbarMenu/ToolbarMenu';

interface IState {
  menuOpened: boolean,
}

interface IProps {
  filename: string,
}

class Toolbar extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      menuOpened: false,
    };
  }

  public menuClick = () => {
    const { menuOpened } = this.state;

    this.setState(({ menuOpened: !menuOpened }));
  }

  public render() {
    const { props, state } = this;

    return (
      <nav className='Toolbar'>
        <div className='Toolbar__branding'>
          <img
            className='Toolbar__branding__logo'
            src={logo}
            alt=''
          />
          <span className='Toolbar__branding__text'>
            Ma Gallery
          </span>
        </div>
        <div className='Toolbar__filename'>
          { props.filename }
        </div>
        <div className='Toolbar__menu-icon'>
          <img
            className='Toolbar__menu-icon__icon'
            onClick={this.menuClick}
            src={burger}
            alt=''
          />
        </div>
        { state.menuOpened && <ToolbarMenu />}
      </nav>
    );
  }
}

export default Toolbar;
