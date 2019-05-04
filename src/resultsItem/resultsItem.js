import React, { Component } from 'react';
import './resultsItem.css';

class ResultsItem extends Component {
  render() {
    return(
      <li key={this.props.id}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </li>
    )
  }
}

export default ResultsItem;