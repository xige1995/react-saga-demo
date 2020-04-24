import React from 'react'

export default class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      num: 0
    }
  }

  handleClick(){
    console.log('Comment Click', this.props.comment.label)
    let temp = this.state.num
    temp++
    this.setState({
      num: temp
    })
  }
   render(){
     return (
       <div onClick={() => this.handleClick()}>{this.props.comment.label} click {this.state.num}</div>
     )
   }
}