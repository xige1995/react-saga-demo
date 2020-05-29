import React from 'react'
import cat from "../../assets/images/cat.jpg"

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} style={{ position: 'absolute', width: '20px',height: '20px', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
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
      <div style={{ height: '200px', border:'1px solid green' }} onMouseMove={this.handleMouseMove}>

        {/*
         render prop 是一个用于告知组件需要渲染什么内容的函数 prop
        */}
        {this.props.render(this.state)}
       {/* {this.props.children(this.state)}*/}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h4>移动鼠标!</h4>
        {/*
           不一定要用名为 render 的 prop 来使用这种模式,
           任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
           也以直接放置到元素的内部。
        */}
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      {/*  <Mouse>
          {mouse => (
            <Cat mouse={mouse}>鼠标的位置是 {mouse.x}，{mouse.y}</Cat>
          )}
        </Mouse>*/}
      </div>
    );
  }
}


export default MouseTracker