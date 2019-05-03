import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import ResultsList from './resultsList/resultsList';

class App extends Component {

  // state lives here, contains data about books
  
  // make API call each time submit button is clicked
  // API call will be in this component, in handleSearch method

  // pass handleSearch to the Searchbar component

  render() {
    return (
      <main className='App'>
      <header>
        <h1>Google Book Search</h1>
        <Searchbar />
      </header>
      <ResultsList />
    </main>
    );
  }
}

export default App;