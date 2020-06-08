import React from 'react'
import CommentList from '../CommentList'
import RefsDemo1 from '../refsDemo/RefsDemo1'
import ContextDemo from '../contextDemo'
import RenderPropsDemo from '../renderPropsDemo'
import Hook from '../hook'

import './detail1.less'

export default class Detail1 extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <p className='title'>Detail1</p>
        <CommentList/>
        <hr/>
        <RefsDemo1/>
        <hr/>
        <ContextDemo/>
        <hr/>
        <RenderPropsDemo/>
        <hr/>
        <Hook/>
      </div>
    )
  }
}