import React, { Component } from 'react';
import './resultsList.css';
import ResultsItem from '../resultsItem/resultsItem';

class ResultsList extends Component {
  // iterate over results data, return an array of list items

  // each list item will be a resultsItem component

  render() {

    
    const listItems = (this.props.results)
    ? this
        .props
        .results
        .map(item => 
        <ResultsItem
          key={item.id}
          id={item.id}
          title={item.volumeInfo.title}
          authors={item.volumeInfo.authors}
          description={item.volumeInfo.description}
          infoLink={item.volumeInfo.infoLink}
          listPrice={item.volumeInfo.listPrice}/>
      )
    : null;

    return(
      <ul className="results_list">
        {listItems}
      </ul>
    );
  }
}

export default ResultsList;