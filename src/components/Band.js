import React, { Component } from 'react';

class Band extends Component {
  
  handleDelete = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <li> 
        {this.props.band.text} 
        <button onClick={(e) => this.handleDelete(e)}>delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
