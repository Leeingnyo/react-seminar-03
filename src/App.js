import React, { Component } from 'react';

import TopMenu from './containers/TopMenu';
import SideMenu from './containers/SideMenu';
import Main from './containers/Main';

class App extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <SideMenu />
        <Main />
      </div>
    );
  }
}

export default App;
