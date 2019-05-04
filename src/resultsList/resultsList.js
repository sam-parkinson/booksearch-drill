import React, { Component } from 'react';
import './resultsList.css';
import ResultsItem from '../resultsItem/resultsItem';

class ResultsList extends Component {
  // iterate over results data, return an array of list items

  // each list item will be a resultsItem component

  render() {
    return(
      <ul className="results_list">
        <ResultsItem number="1" />
        <ResultsItem number="2" />
        <ResultsItem number="3" />
      </ul>
    )
  }
}

export default ResultsList