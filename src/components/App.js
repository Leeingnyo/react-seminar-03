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
    this.props.onClickSubtract(); // - action 발생시키기
  }

  handleClickAddButton() {
    this.props.onClickAdd(); // + action 발생시키기
  }

  render() {
    const {value} = this.props;
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
