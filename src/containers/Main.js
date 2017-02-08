import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        view = <Search />;
        break;
      case MY_SELECTION_MODE:
        view = <MySelection />;
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

const mapStateToProps = (state) => {
  return {
    mode: state.app.mode,
  };
};

Main = connect(mapStateToProps)(Main);

export default Main;
