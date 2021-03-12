// import PropTypes from "prop-types";

import React from "react";

class App extends React.Component {
  state = {
    isLoading: true, // 마운트 되자마자 isLoading은 당연히 true가 된다
    movies: [],
  };
  componentDidMount() {
    // 컴포넌트 렌더링이 끝나자마자 호출된다
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
