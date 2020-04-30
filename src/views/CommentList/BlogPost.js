import React from 'react'
import DataSource from './DataSource'
import TextBlock from './TextBlock'

export default class BlogPost extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(this.props.id)
    };
  }

  // 重复逻辑
  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  // 重复逻辑
  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  // 重复逻辑
  handleChange() {
    console.log('BlogPost handleChange', DataSource.getBlogPost(this.props.id))
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render(){
    return (
      <TextBlock text={this.state.blogPost.length && this.state.blogPost[0]} />
    )
  }
}