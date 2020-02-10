import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store';
import './ImageViewer.css';

interface IProps {
  currentFile: string,
}

class ImageViewer extends React.PureComponent<IProps> {
  public render() {
    const { props } = this;

    return (
      <div className='ImageViewer'>
        <img
          alt={props.currentFile}
          className='ImageViewer__main-image'
          src={props.currentFile}
        />
        <img
          alt=''
          className='ImageViewer__background-image'
          src={props.currentFile}
        />
      </div>
    );
  }
}

const MappedState = (state: State) => ({
  currentFile: state.currentFile,
});

export default connect(
  MappedState,
  {},
)(ImageViewer);
