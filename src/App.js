import React, { Component } from 'react';

import TopMenu from './containers/TopMenu';
import SideMenu from './containers/SideMenu';

class App extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <SideMenu />
      </div>
    );
  }
}

export default App;
