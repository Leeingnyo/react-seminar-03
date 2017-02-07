import React, { Component } from 'react';

import TopMenu from './TopMenu';
import SideMenu from './SideMenu';

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
