import React, { Component } from 'react';

import TopMenu from './containers/TopMenu';
import SideMenu from './containers/SideMenu';
import Main from './containers/Main';
import {
  SEARCH_MODE,
  MY_SELECTION_MODE,
  TRASH_BIN_MODE,
} from './const';

class App extends Component {

  render() {
    return (
      <div id="wrapper">
        <div id="main-wrapper">
          <TopMenu />
          <Main />
        </div>
        <SideMenu />
      </div>
    );
  }
}

export default App;
