import React from 'react'

import DataSource from './DataSource'
import Comment from './Comment'

export default class CommentList extends React.Component{
  constructor (props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount(){
    // 订阅更改
    DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount(){
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange(){
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    })
  }

  render(){
    return (
      <div>
        { this.state.comments.map( (comment) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
      </div>
    )
  }

}
