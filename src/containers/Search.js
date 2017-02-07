import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import ItemList from '../components/ItemList';

class Search extends Component {
  render() {
    return (
      <section id="search">
        <h2>Search</h2>
        <SearchBox />
        <ItemList />
      </section>
    );
  }
}

export default Search;
