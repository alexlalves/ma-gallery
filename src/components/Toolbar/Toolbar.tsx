import React from 'react';
import { connect } from 'react-redux';

import ToolbarMenu from '../ToolbarMenu';
import { ReactComponent as LogoIcon } from '../../assets/logo/logo.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { State } from '../../store';
import './Toolbar.css';

const path = window.require('path');

interface IState {
  menuOpened: boolean,
}

interface IProps {
  currentFile: string,
}

class Toolbar extends React.Component<IProps, IState> {
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

  public extractFilename = () => {
    const { props } = this;
    return path.parse(props.currentFile).base;
  }

  public render() {
    const { state } = this;

    return (
      <nav className='Toolbar'>
        <div className='Toolbar__branding'>
          <LogoIcon
            className='Toolbar__branding__logo'
          />
          <span className='Toolbar__branding__text'>
            Ma Gallery
          </span>
        </div>
        <div className='Toolbar__filename'>
          { this.extractFilename() }
        </div>
        <div className='Toolbar__menu-icon'>
          <BurgerIcon
            className='Toolbar__menu-icon__icon'
            onClick={this.menuClick}
          />
        </div>
        { state.menuOpened && <ToolbarMenu />}
      </nav>
    );
  }
}

const MappedState = (state: State) => ({
  currentFile: state.currentFile,
});

export default connect(
  MappedState,
  {},
)(Toolbar);
