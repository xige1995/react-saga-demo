import React from 'react'
import AutoFocusTextInput from './CustomTextInput'
import CustomTextInput1 from './CustomTextInput1'
import CustomTextInput2 from './CustomTextInput2'
import AutoFocusTextInput3 from './AutoFocusTextInput3'

import FancyButton from './FancyButton'

function MyFunctionComponent() {
  return <input />;
}

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();


class RefsDemo1 extends React.Component{
  constructor(props){
    super(props)
    // React.createRef() API 创建
    this.myRef = React.createRef()
    this.textInput = React.createRef();

    this.state = {
      myRefText: ''
    }
  }
  handleClick(){
    // 在 ref 的 current 属性中被访问
    const node = this.myRef.current
    console.log('refsDemo1 myRef', node)
    this.setState({
      myRefText:  node.innerText
    })
  }
  render(){
    return (
      <div>
        <h3>Refs and the DOM</h3>

        <p>class组件创建并获取ref</p>
        <button onClick={() => this.handleClick()}>点击获取ref</button>
        <div ref={this.myRef}>refsDemo1</div>
        <div>myRefText: {this.state.myRefText}</div>

        <p>通过ref 使input获取焦点</p>
        <AutoFocusTextInput/>
        <p>在父组件通过ref 使input获取焦点,无法项其他props 属性一样传递</p>
        <AutoFocusTextInput3/>

        <p>给function组件挂载ref, 或报错</p>
        {/*<MyFunctionComponent  ref={this.textInput}/>*/}

       <p>通过回调方式1 创建 Refs 并访问</p>
        <CustomTextInput1/>

        <p>通过回调方式2 创建 Refs 并访问</p>
        <CustomTextInput2/>

        <p>Ref 转发</p>
        <div>function组件无实例，通过 forwardRef 传递：</div>
        <FancyButton/>
      </div>
    )
  }
}

export default RefsDemo1