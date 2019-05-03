import React, { Component } from 'react';
import './resultsList.css';

class ResultsList extends Component {
  // iterate over results data, return an array of list items

  // each list item will be a resultsItem component
  
  render() {
    return(
      <ul className="results_list">
        <li>result 1</li>
        <li>result 2</li>
        <li>result 3</li>
      </ul>
    )
  }
}

export default ResultsList