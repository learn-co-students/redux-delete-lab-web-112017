import React, { Component } from 'react';
import Band from "./Band"

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map(band => <Band key={band.id} store={this.props.store} band={band}/>)}
      </ul>
    );
  }
};

export default Bands;
