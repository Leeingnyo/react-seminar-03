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

  constructor(props) {
    super(props);

    this.state = {
      mode: SEARCH_MODE,
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div id="main-wrapper">
          <TopMenu />
          <Main mode={this.state.mode}/>
        </div>
        <SideMenu />
      </div>
    );
  }
}

export default App;
