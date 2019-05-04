import React, { Component } from 'react';
import './searchbar.css';

class Searchbar extends Component {
  render() {
    return(
      <form>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={e => this.props.updateSearch(e.target.value)}/>
          <button onClick={e => this.props.handleSearch(e)}>Search</button>
        </div>
        <div>
          <label>Print Type: </label>
          <select
            id="print_type"
            name="print_type"
            onChange={e => this.props.updatePrintType(e.target.value)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label>Book Type: </label>
          <select
            id="book_type"
            name="book_type"
            onChange={e => this.props.updateFilter(e.target.value)}>
            <option value="">All books</option>
            <option value="ebooks">All eBooks</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">eBooks requiring purchase</option>
            <option value="full">Fully available eBooks</option>
            <option value="partial">Partially available eBooks</option>
          </select>
        </div>
      </form>  
    );
  }
}

export default Searchbar;