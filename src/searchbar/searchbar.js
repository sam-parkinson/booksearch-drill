import React, { Component } from 'react';
import './searchbar.css';

class Searchbar extends Component {
  render() {
    return(
      <form>
        <div>
          <label>Search:</label>
          <input></input>
          <button>Search</button>
        </div>
        <div>
          <label>Print Type:</label>
          <input></input>
          <label>Book Type:</label>
          <input></input>
        </div>
      </form>  
    );
  }
}

export default Searchbar;