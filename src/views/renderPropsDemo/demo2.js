import React from 'react'
import cat from "../../assets/images/cat.jpg"

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        <img src={cat} style={{ position: 'absolute', width: '20px',height: '20px',left: mouse.x, top: mouse.y }} />
      </div>
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div
        style={{ height: '200px',border: '1px solid blue'}}
        onMouseMove={this.handleMouseMove}>

        {/*
          我们可以在这里换掉 <p> 的 <Cat>   ......
          但是接着我们需要创建一个单独的 <MouseWithSomethingElse>
          每次我们需要使用它时，<MouseWithCat> 是不是真的可以重复使用.
          <Cat> 硬编码到 <Mouse> 组件里
        */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h4>移动鼠标!</h4>
        <MouseWithCat />
      </div>
    );
  }
}

export default MouseTracker