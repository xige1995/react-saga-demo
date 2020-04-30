import React from 'react'
import CommentListS from './CommentList'
import BlogPost from './BlogPost'
import CommentListNew from './CommentListNew'
import BlogPostNew from './BlogPostNew'
import InputComponent  from './InputComponent'

import { withSubscription, logProps } from './HOC'

const CommentListNewHOC = withSubscription(
  CommentListNew,
  DataSource => DataSource.getComments()
  )

const BlogPostNewHOC = withSubscription(
  BlogPostNew,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)

const InputComponentHOC = logProps(InputComponent)


export default class CommentList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: 'text'
    }
  }

  componentDidMount(){
    console.log('CommentListNewHOC staticMethod0:')
    CommentListNewHOC.staticMethod0()

    console.log('CommentListNewHOC staticMethod1:')
    CommentListNewHOC.staticMethod1()
  }

  handleUpdate(){
    this.setState({
      text: 'text update'
    })
  }

  render(){

    /*const CommentListNewHOC1 = withSubscription(
      CommentListNew,
      DataSource => DataSource.getComments()
    )*/

    return(
      <div>
        <h3>高阶组件</h3>
        <div>
          <p>普通组件 CommentList:</p>
          <CommentListS/>
          <p>普通组件 BlogPost:</p>
          <BlogPost id={1} />

          <p>CommentListNew 之高阶组件  CommentListNewHOC</p>
          <CommentListNewHOC/>
         {/* <p>CommentListNew 之高阶组件  CommentListNewHOC 放在render里 每次render执行 都会重置其子树</p>
          <CommentListNewHOC1/>*/}
          <p>BlogPostNew 之高阶组件 BlogPostNewHOC</p>
          <BlogPostNewHOC id={1}/>

          <p>InputComponent 之高阶组件 InputComponentHOC</p>
          <button onClick={() => this.handleUpdate()}>跟新render</button>
          <InputComponentHOC text={this.state.text} />
        </div>

      </div>
    )
  }
}