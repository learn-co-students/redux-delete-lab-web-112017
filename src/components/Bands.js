import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {
  render() {
    let renderBands = this.props.store.getState().bands.map((band,index)=> <Band key={index} store={this.props.store} band={band}/>)

    console.log(renderBands)
    return(
      <ul>
        {renderBands}
      </ul>
    );
  }
};

export default Bands;
