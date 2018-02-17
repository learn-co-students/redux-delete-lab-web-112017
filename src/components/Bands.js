import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  handleBands = () => {
    return this.props.store.getState().bands.map((band, index) => {
      return <Band store={this.props.store} key={index} band={band}/>
    })
  }

  render() {
    return(
      <ul>
        {this.handleBands()}
      </ul>
    );
  }
};

export default Bands;
