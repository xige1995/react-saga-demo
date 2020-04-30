import React from 'react'
import { Button } from 'antd'

function sonClick(){
  console.log('FancyButton click')
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={sonClick}>
    {props.children}
  </button>
));

export default class RefForward extends React.Component{
  constructor(props){
    super(props)
    this.ref = React.createRef();
  }
  fatherClick(){
    // 调用子组件的方法
    console.log('通过ref调用function类型子组件的click方法：', this.ref.current)
    this.ref.current.click()
  }
  render(){
    // 你可以直接获取 DOM button 的 ref：
    return(
      <div>
        <button onClick={() => this.fatherClick()}> 获取子function组件的ref</button>
        <p><FancyButton ref={this.ref}>Son button</FancyButton></p>
      </div>
    )
  }
}


