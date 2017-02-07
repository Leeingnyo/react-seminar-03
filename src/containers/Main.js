import React, { Component } from 'react';

import Search from './Search';
import MySelection from './MySelection';
import TrashBin from './TrashBin';

const SEARCH_MODE = 0;
const MY_SELEcTION_MODE = 1;
const TRASH_BIN_MODE = 2;

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: SEARCH_MODE,
    };
  }

  render() {
    let view = null;

    switch (this.state.mode) {
      case SEARCH_MODE:
        view = <Search />;
        break;
      case MY_SELEcTION_MODE:
        view = <MySelection />;
        break;
      case TRASH_BIN_MODE:
        view = <TrashBin />;
        break;
    }

    return view;
  }
}

export default Main;

