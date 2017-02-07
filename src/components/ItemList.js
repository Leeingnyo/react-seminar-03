import React, { Component } from 'react';

import Item from './Item';

class ItemList extends Component {

  render() {
    const {items} = this.props;
    const listItems = items.map(item => {
      return <Item key={item.name} item={item} />;
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

export default ItemList;
