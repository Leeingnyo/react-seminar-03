import React, { Component } from 'react';

class SideMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFolded: true,
    };

    this.renderNavItem = this.renderNavItem.bind(this);
  }

  renderNavItem(itemImg, itemName) {
    return (
      <li>
        <img width="30px" src={itemImg}/>
        { this.state.isFolded ? '' : itemName }
      </li>
    );
  }

  render() {
    const foldControl = this.state.isFolded
      ? <button>닫기</button>
      : <button>열기</button>;

    return (
      <aside>
        {foldControl}
        <nav>
          <ul>
            {this.renderNavItem('https://maxcdn.icons8.com/windows8/PNG/512/Very_Basic/search-512.png', '검색')}
            {this.renderNavItem('http://icons.iconarchive.com/icons/iconsmind/outline/512/Box-Open-icon.png', '보관함')}
            {this.renderNavItem('http://customwastega.com/wp-content/uploads/2015/02/noun_16193.png', '휴지통')}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideMenu;
