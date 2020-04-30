import React from 'react'


/*const InputComponent = function(props) {
  return(
    <div>
      <div>{props.text}</div>
    </div>
  )
}*/

class InputComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sunState: 0
    }
  }
  handleClick(){
    let temp = this.state.sunState
    temp++
    this.setState({
      sunState: temp
    })
  }
  render (){
    return(
      <div>
        <div>props: {this.props.text}</div>
        原始组件本身非子树不会更新：
        <div style={{paddingLeft: '20px'}}>
          <button onClick={() => this.handleClick()}>点击sunState加1</button>
          <div>sunState: { this.state.sunState}</div>
        </div>
      </div>
    )
  }
}

export default InputComponent