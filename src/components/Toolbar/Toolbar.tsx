import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/logo/logo.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import './Toolbar.css';
import ToolbarMenu from '../ToolbarMenu';

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
          <LogoIcon
            className='Toolbar__branding__logo'
          />
          <span className='Toolbar__branding__text'>
            Ma Gallery
          </span>
        </div>
        <div className='Toolbar__filename'>
          { props.filename }
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

export default Toolbar;
