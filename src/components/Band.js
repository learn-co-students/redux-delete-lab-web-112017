import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
        <ul>
          <li>
              {this.props.band.text}
              <button onClick={this.handleDelete}>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
};

export default Band;
