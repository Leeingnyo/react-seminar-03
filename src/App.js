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
      registered: [],
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    this.setState({
      mode, // mode: mode, 에서 property 이름과 variable 이름이 같아서 생략 (ES6)
    });
  }

  render() {
    return (
      <div id="wrapper">
        <div id="main-wrapper">
          <TopMenu />
          <Main mode={this.state.mode} registered={this.state.registered}/>
        </div>
        <SideMenu changeMode={this.changeMode} />
      </div>
    );
  }
}

export default App;
