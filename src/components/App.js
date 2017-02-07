import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addAction, subtractAction} from '../actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClickSubtractButton = this.handleClickSubtractButton.bind(this);
    this.handleClickAddButton = this.handleClickAddButton.bind(this);
  }

  handleClickSubtractButton() {
    // - action 발생시키기
  }

  handleClickAddButton() {
    // + action 발생시키기
  }

  render() {
    const value = 0;
    return (
      <div>
        <button onClick={this.handleClickSubtractButton}>-</button>
        <span>{value}</span>
        <button onClick={this.handleClickAddButton}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.count.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: () => { dispatch(addAction()); },
    onClickSubtract: () => { dispatch(subtractAction()); },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
