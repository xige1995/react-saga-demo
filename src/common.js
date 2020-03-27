import React from 'react'
import './App.less'

export default class Common extends React.Component{
  render(){
    console.log('Common props', this.props)
    return(
      <div className="app">
        <div className="header">header</div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}