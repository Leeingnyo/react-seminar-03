import React, { Component } from 'react';

class SideMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFolded: true,
    };

    this.renderNavItem = this.renderNavItem.bind(this);
  }

  // handle click button 열기
  foldSideBar() {
    this.setState({
      isFolded: true,
    });
  }

  // handle click button 닫기
  unfoldSideBar() {
    this.setState({
      isFolded: false,
    });
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
      ? <button onClick={this.unfoldSideBar.bind(this)}>열기</button>
      : <button onClick={this.foldSideBar.bind(this)}>닫기</button>;

    return (
      <aside className={this.state.isFolded ? 'fold' : 'unfold'}>
        {foldControl}
        <nav>
          <ul>
            {this.renderNavItem('https://maxcdn.icons8.com/windows8/PNG/512/Very_Basic/search-512.png', '검색')}
            {this.renderNavItem('http://icons.iconarchive.com/icons/iconsmind/outline/512/Box-Open-icon.png', '보관함')}
            {this.renderNavItem('https://glglgozz.leeingnyo.me/trashbin.png', '휴지통')}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideMenu;
