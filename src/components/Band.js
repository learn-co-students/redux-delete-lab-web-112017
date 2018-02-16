import React, { Component } from 'react';

class Band extends Component {
  
  handleDeleteBand = (e) => {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }
  
  render() {
    return(
      <li>
        {this.props.band.text} <button onClick={this.handleDeleteBand}>Disband dis band</button>
      </li>
    );
  }
};

export default Band;
