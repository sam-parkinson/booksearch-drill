import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import ResultsList from './resultsList/resultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      printType: 'all',
      filter: '',
      results: []
    }
  }

  updateSearch(query) {
    this.setState({
      search: query
    });
  }

  updatePrintType(type) {
    this.setState({
      printType: type
    });
  }

  updateFilter(item) {
    this.setState({
      filter: item
    });
  }

  handleSearch(e) {
    e.preventDefault();
    if (this.state.search === '') {
      return;
    }
    const url = this.state.filter 
      ? `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.filter}&printType=${this.state.printType}&projection=lite`
      : `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${this.state.printType}&projection=lite&key=AIzaSyB_rfHoxJWKN2kZzBGNUhM6eDzWhHXDz5A`
    
    console.log(url);
    const options = {
      method: 'GET'
    }

    fetch(url, options)
      .then(response => response.json)
      .then(responseJson => {
        this.setState({results: responseJson.items})
      });
  }


  // https://www.googleapis.com/books/v1/volumes?q={search}&filter={filter}&printType={printType}&projection=lite

  render() {
    return (
      <main className='App'>
      <header>
        <h1>Google Book Search</h1>
        <Searchbar
          updateSearch={query => this.updateSearch(query)}
          updatePrintType={type => this.updatePrintType(type)}
          updateFilter={item => this.updateFilter(item)}
          handleSearch={e => this.handleSearch(e)}/>
      </header>
      <ResultsList />
    </main>
    );
  }
}

export default App;