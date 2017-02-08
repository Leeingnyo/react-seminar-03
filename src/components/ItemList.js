import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  addItemAction,
  removeItemAction,
} from '../actions';

import Item from './Item';

class ItemList extends Component {

  render() {
    const {items} = this.props;
    const listItems = items.map(item => {
      let isRegistered = false;
      this.props.registeredItems.forEach(registeredItem => {
        isRegistered = isRegistered | item.name === registeredItem.name;
      });
      return <Item
        key={item.name}
        register={this.props.addItem}
        deregister={this.props.removeItem}
        isRegistered={isRegistered}
        item={item} />;
    });
    return (
      <section className="article-wrapper">
        {listItems}
      </section>
    );
  }
}

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  items: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    registeredItems: state.user.registeredItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => { dispatch(addItemAction(item)); },
    removeItem: item => { dispatch(removeItemAction(item)); },
  };
};

ItemList = connect(mapStateToProps , mapDispatchToProps)(ItemList);

export default ItemList;
