import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

export default class RenderPropsDemo extends React.Component{
  render(){
    return(
      <div>
        <p>Mouse组件封装了所有关于监听 mousemove 事件和存储鼠标 (x, y) 位置的行为，但其仍不是真正的可复用</p>
        <Demo1/>

        <p>现在，每当我们想要鼠标位置用于不同的用例时，我们必须创建一个新的组件（本质上是另一个 MouseWithCat组件 ）</p>
        <Demo2/>

        <p>我们可以提供一个带有函数 prop 的 Mouse 组件，它能够动态决定什么需要渲染的，而不是将 Cat 硬编码到 Mouse 组件里，并有效地改变它的渲染结果。</p>
        <Demo3/>
      </div>
    )
  }
}