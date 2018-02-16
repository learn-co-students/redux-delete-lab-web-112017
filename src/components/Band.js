import React, { Component } from 'react';

class Band extends Component {

  deleteBand = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.deleteBand}></button>
      </div>
    );
  }
};

export default Band;
