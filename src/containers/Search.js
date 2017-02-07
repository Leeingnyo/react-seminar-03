import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import ItemList from '../components/ItemList';

class Search extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
    }

    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(searchResults) {
    this.setState({
      searchResults
    });
  }

  render() {
    return (
      <section id="search">
        <h2>Search</h2>
        <SearchBox updateSearchResults={this.updateSearchResults} />
        <ItemList items={this.state.searchResults} />
      </section>
    );
    // updateSearchResults 를 넘겨줘서 업데이트 받는다
    // 그리고 결과를 출력해야 하니 ItemList에게 넘겨준다
  }
}

export default Search;
