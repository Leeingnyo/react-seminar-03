import React, { Component } from 'react';

import {
  SEARCH_MODE,
  MY_SELECTION_MODE,
  TRASH_BIN_MODE,
} from '../const';
import Search from './Search';
import MySelection from './MySelection';
import TrashBin from './TrashBin';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let view = null;

    switch (this.props.mode) {
      case SEARCH_MODE:
        view = <Search register={this.props.register} deregister={this.props.deregister} />;
        // 받은 걸 또 넘겨주고 있다
        break;
      case MY_SELECTION_MODE:
        view = <MySelection registered={this.props.registered} deregister={this.props.deregister} />;
        // 받은 걸 또 넘겨주고 있다
        break;
      case TRASH_BIN_MODE:
        view = <TrashBin />;
        break;
    }

    return (
      <main id="main">
        {view}
      </main>
    );
  }
}

export default Main;

