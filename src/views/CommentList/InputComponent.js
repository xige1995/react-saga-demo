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
        子树：
        <div style={{paddingLeft: '20px'}}>
          <div onClick={() => this.handleClick()}>点击sunState加1</div>
          <div>sunState: { this.state.sunState}</div>
        </div>
      </div>
    )
  }
}

export default InputComponent