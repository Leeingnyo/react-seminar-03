import React, { Component } from 'react';

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

export default App;
