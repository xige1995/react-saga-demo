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

  // 静态方法添加1
  static staticMethod0(){
    console.log('staticMethod0 this', this)
    console.log('staticMethod0')
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

// 静态方法添加2
CommentListNew.staticMethod = function() {
  console.log('staticMethod this', this)
  console.log('staticMethod this state 静态方法拿不到state 和 props', this.state, this.props)
  console.log('staticMethod')
}
CommentListNew.staticMethod()

export default CommentListNew