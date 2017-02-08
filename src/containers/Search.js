import React, { Component } from 'react';
import {connect} from 'react-redux';

import {searchAction} from '../actions';

import SearchBox from '../components/SearchBox';
import ItemList from '../components/ItemList';

class Search extends Component {
  render() {
    return (
      <section id="search">
        <h2>Search</h2>
        <SearchBox
          search={this.props.search} />
        <ItemList items={this.props.searchResults} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.app.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: () => { dispatch(searchAction()); },
  };
};

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;
