import React, { Component } from 'react';

import {
  SEARCH_MODE,
  MY_SELECTION_MODE,
  TRASH_BIN_MODE,
} from '../const';

class SideMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFolded: true,
    };

    this.generateHandlerClickNavItem = this.generateHandlerClickNavItem.bind(this);
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

  generateHandlerClickNavItem(mode) {
    return () => {
      this.props.changeMode(mode);
    };
  }

  renderNavItem(itemImg, itemName, mode) {
    return (
      <li onClick={this.generateHandlerClickNavItem(mode)}>
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
      <aside id="side-menu" className={this.state.isFolded ? 'fold' : 'unfold'}>
        {foldControl}
        <nav>
          <ul>
            {
              this.renderNavItem('https://maxcdn.icons8.com/windows8/PNG/512/Very_Basic/search-512.png'
                , '검색', SEARCH_MODE)
            }
            {
              this.renderNavItem('http://icons.iconarchive.com/icons/iconsmind/outline/512/Box-Open-icon.png'
                , '보관함', MY_SELECTION_MODE)
            }
            {
              this.renderNavItem('https://glglgozz.leeingnyo.me/trashbin.png'
                , '휴지통', TRASH_BIN_MODE)
            }
          </ul>
        </nav>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  changeMode: React.PropTypes.func,
};

export default SideMenu;
