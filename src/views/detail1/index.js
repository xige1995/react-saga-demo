import React from 'react'
import CommentList from '../CommentList/CommentList'
import BlogPost from '../CommentList/BlogPost'
import CommentListNew from '../CommentList/CommentListNew'
import BlogPostNew from '../CommentList/BlogPostNew'
import InputComponent from '../CommentList/InputComponent'
import { withSubscription, logProps } from '../CommentList/HOC'

import RefsDemo1 from '../refsDemo/RefsDemo1'

import './detail1.less'

const CommentListWithSubscription = withSubscription(
  CommentListNew,
  (DataSource) => DataSource.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPostNew,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

const InputWithLogprops = logProps(InputComponent)
export default class Detail1 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: 0
    }
  }
  addText(){
    let temp = this.state.text
    temp++
    this.setState({
      text: temp
    })
  }
  componentDidMount(){
    console.log('务必复制静态方法', typeof CommentListWithSubscription.staticMethod0)
    console.log('务必复制静态方法', typeof CommentListWithSubscription.staticMethod)
    console.log('非静态方法', typeof CommentListWithSubscription.handleClick)
    CommentListWithSubscription.staticMethod0()
  }

  render(){
    // render HOC 每次或生成新的组件，重新渲染子树及其状态
    //const InputWithLogprops = logProps(InputComponent)

    return(
      <div>
        <p className='title'>Detail1</p>
        <h4 className='m-t-50'>CommentList 测试</h4>
        <CommentList/>
        <h4 className='m-t-50'>BlogPost 测试</h4>
        <BlogPost id={1} />

        <hr/>
        <h4 className='m-t-50'>CommentListNew 测试</h4>
        <CommentListWithSubscription/>
        <p className='m-t-50'>BlogPostNew 测试</p>
        <BlogPostWithSubscription id={1} extra='额外的props' />

        <p>不要改变原始组件。使用组合。</p>
        <div onClick={() => this.addText()}>HOC在render里，点我会重置子树状态</div>
        <InputWithLogprops text={this.state.text} />

        <hr/>
        <h4 className='m-t-50'>Refs and the DOM</h4>
        <RefsDemo1/>

      </div>
    )
  }
}