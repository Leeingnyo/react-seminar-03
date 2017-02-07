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
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
  }

  register(newItem) {
    const newRegi = this.state.registered.concat([newItem]);
    this.setState({
      registered: newRegi,
    });
  }

  deregister(newItem) {
    const newRegi = this.state.registered.filter(item => {
      return item.name !== newItem.name;
    });
    this.setState({
      registered: newRegi,
    });
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
          <Main
            mode={this.state.mode}
            registered={this.state.registered}
            register={this.register}
            deregister={this.deregister} />
        </div>
        <SideMenu changeMode={this.changeMode} />
      </div>
    );
    // registered랑 register랑 deregister를 넘겨주고 있다
  }
}

export default App;
