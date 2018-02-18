import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bandsArray = this.props.store.getState().bands.map(b => < Band key={b.id} id={b.id} store={this.props.store} band={b}/>)
    
    return(
      <ul>
        {bandsArray}
      </ul>
    );
  }
};

export default Bands;
