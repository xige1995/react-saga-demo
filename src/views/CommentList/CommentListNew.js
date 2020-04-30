import React from 'react'
import Comment from './Comment'

class CommentListNew extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      num: 0,
    }
  }
  handleClick(){
    console.log('handleClick this state', this.state)

  }

  // 静态方法1
  static staticMethod0(){
    console.log('staticMethod0 this state 静态方法拿不到state 和 props', this.state, this.props)
  }

  render(){
    console.log('CommentListNew props', this.props)
    return (
      <div>
        { this.props.data.map( (comment) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
      </div>
    )
  }
}

// 静态方法2 class外额外添加
// 静态方法拿不到state 和 props
CommentListNew.staticMethod1 = function() {
  console.log('staticMethod1 this state 静态方法拿不到state 和 props', this.state, this.props)
}
CommentListNew.staticMethod1()

export default CommentListNew