import React, { Component } from 'react';

import ItemList from '../components/ItemList';

class MySelection extends Component {
  render() {
    return (
      <section id="my-selection">
        <h2>MySelection</h2>
        <ItemList />
      </section>
    );
  }
}

export default MySelection;
