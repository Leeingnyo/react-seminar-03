import React, { Component } from 'react';

import TopMenu from './containers/TopMenu';
import SideMenu from './containers/SideMenu';
import Main from './containers/Main';

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
