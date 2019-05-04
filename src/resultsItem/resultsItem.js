import React, { Component } from 'react';
import './resultsItem.css';

class ResultsItem extends Component {
  render() {
    return(
      <li>
        <h3>Title</h3>
        <p>Description of book {this.props.number}</p>
      </li>
    )
  }
}

export default ResultsItem;