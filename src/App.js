import React from "react";
import "./App.less";
import LeftMenu from './components/LeftMenu/index'

class App extends React.Component{
  render(){
    console.log('this.props.children', this.props)
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
