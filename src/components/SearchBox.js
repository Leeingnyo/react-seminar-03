import React, { Component } from 'react';

class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }
  
  submit(e) {
    e.preventDefault();
    this.props.search();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input/>
        <button>검색</button>
      </form>
    );
  }
}

SearchBox.propTypes = {
  search: React.PropTypes.func,
};

export default SearchBox;
