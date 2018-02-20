import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={this.handleOnClick}>X</button>
      </li>
    );
  }

  handleOnClick = (e) => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
    this.setState({
      text: ''
    })
  }
};

export default Band;
