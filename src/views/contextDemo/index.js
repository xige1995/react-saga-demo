import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'

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
      </div>
    )
  }

}