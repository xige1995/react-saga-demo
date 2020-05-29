import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from "./demo3";
import Demo4 from "./demo4";

export default class ContextDemo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h3>Context</h3>
        <p>通过中间元素传递 props：</p>
        <Demo1/>
        <p>使用 context, 我们可以避免通过中间元素传递 props：</p>
        <Demo2/>
        <p>在嵌套组件中更新 Context：</p>
        <Demo3></Demo3>

        <p>消费多个 Context</p>
        <Demo4></Demo4>
      </div>
    )
  }

}