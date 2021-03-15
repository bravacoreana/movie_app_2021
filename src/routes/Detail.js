import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    location.state || history.push("/");
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
