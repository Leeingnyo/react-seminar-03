import React, { Component } from 'react';

import ItemList from '../components/ItemList';

class MySelection extends Component {
  render() {
    return (
      <section id="my-selection">
        <h2>MySelection</h2>
        <ItemList items={this.props.registered} register={this.props.register} deregister={this.props.deregister} />
      </section>
    );
    // items 를 받아옴
    // 받은 register, deregister를 또 넘겨주고 있다
  }
}

export default MySelection;
