import React from "react";
import { Link } from "react-router-dom";

export default class Detail3 extends React.Component {
  render() {
    return (
      <div>
        <a href="#/detail/1">去detail-1</a>
        <Link to="/detail/2">去detail-2</Link>

        <button
          onClick={() =>
            this.props.history.push({
              pathname: "/detail",
              state: {
                id: 3,
              },
            })
          }
        >
          通过函数跳转state
        </button>

        <button
          onClick={() =>
            this.props.history.push({
              pathname: "/detail",
              query: {
                id: "4",
              },
            })
          }
        >
          通过函数跳转query
        </button>
      </div>
    );
  }
}
