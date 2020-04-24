import React from 'react'
import AutoFocusTextInput from './CustomTextInput'
import CustomTextInput1 from './CustomTextInput1'
import CustomTextInput2 from './CustomTextInput2'

function MyFunctionComponent() {
  return <input />;
}

class RefsDemo1 extends React.Component{
  constructor(props){
    super(props)
    // React.createRef() API 创建
    this.myRef = React.createRef()
    this.textInput = React.createRef();
  }
  handleClick(){
    // 在 ref 的 current 属性中被访问
    const node = this.myRef.current
    console.log('refsDemo1 myRef', node)
  }
  render(){
    return (
      <div>
        <div onClick={() => this.handleClick()}>点击获取ref</div>
        <div ref={this.myRef}>
          refsDemo1
        </div>
        <AutoFocusTextInput/>
        <p>给function组件挂载ref, 或报错</p>
       {/* <MyFunctionComponent  ref={this.textInput}  />*/}

       <p>回调 Refs</p>
        <CustomTextInput1/>

        <CustomTextInput2/>
      </div>
    )
  }
}

export default RefsDemo1