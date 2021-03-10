// import PropTypes from "prop-types";

import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;

// 이제 class App 이 리액트 컴포넌트다
