import React, { Component } from 'react';

import Item from './Item';

class ItemList extends Component {

  render() {
    const {items} = this.props;
    const listItems = items.map(item => {
      let isRegistered = false;
      this.props.registered.forEach(registeredItem => {
        isRegistered = isRegistered || item.name === registeredItem.name;
      });
      return <Item key={item.name} item={item} isRegistered={isRegistered} register={this.props.register} deregister={this.props.deregister} />;
      // 넘겨받은 registered에 속하는 지 보고 isRegistered 를 설정한다
        // 이거 넘겨주는 거 잊어버려서 다시 따라가서 줘야한다
      // 받은 register, deregister를 또또 넘겨주고 있다
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
