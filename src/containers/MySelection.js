import React, { Component } from 'react';
import {connect} from 'react-redux';

import ItemList from '../components/ItemList';

class MySelection extends Component {
  render() {
    return (
      <section id="my-selection">
        <h2>MySelection</h2>
        <ItemList items={this.props.registeredItems} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registeredItems: state.user.registeredItems,
  };
};

MySelection = connect(mapStateToProps)(MySelection);

export default MySelection;
