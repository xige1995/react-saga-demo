import React from "react";
import "./App.less";
import LeftMenu from './components/LeftMenu/index'

class Admin extends React.Component{
  render(){
    console.log('this.props.children', this.props)
    return (
      <div className="app">
      <div className="header">header</div>
    <div className='content'>
      <div className="menu">
        <LeftMenu/>
      </div>
      <div className="right_content">
        {this.props.children}
      </div>
    </div>
    </div>
    );
  }
}

export default Admin;
