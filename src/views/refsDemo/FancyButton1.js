import React from 'react'
import { Button } from 'antd'


export default class FancyButton1 extends React.Component{
  constructor(props){
    super(props)
  }
  handleClick(){
    console.log('获取子function组件', this)
  }
  render(){
    // 你可以直接获取 DOM button 的 ref：
    return(
      <div>
        <Button {...this.props} onClick={() => this.handleClick()}> 获取子function组件</Button>
      </div>
    )
  }
}


