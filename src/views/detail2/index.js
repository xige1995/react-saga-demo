import React from "react";
import { connect } from "react-redux";
import { incrementAction } from "../../store/actions";
import { increment_async } from "../../store/types";

class Detail2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href="#/">回到home</a>
        <div>current number: {this.props.number}</div>
        <button type="primary" onClick={() => this.click()}>
          点击+1
        </button>

        <button type="primary" onClick={() => this.clickAsync()}>
          点击延时 +1
        </button>
      </div>
    );
  }
  click() {
    this.props.dispatch(incrementAction());
    console.log("number", this.props);
  }

  clickAsync(){
    this.props.dispatch({type: increment_async})
  }
  componentDidMount() {
    console.log("router params", this.props.match.params);

    console.log("router state", this.props.history.location.state);

    console.log("router query", this.props.location.query);
  }
}

export default connect((state) => ({
  number: state.number
}))(Detail2);
