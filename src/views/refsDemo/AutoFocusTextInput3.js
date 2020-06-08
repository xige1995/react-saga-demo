import React from 'react'

class CustomTextInput extends React.Component{
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.focusTextInput = this.focusTextInput.bind(this);
  }


  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    console.log('focusTextInput props', this.props)
    // console.log('focusTextInput props', this.ref)
    // this.props.ref.current.focus();
  }
  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.pFocusTextInput = this.pFocusTextInput.bind(this)
  }
  pFocusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focusTextInput();
  }
  render() {
    return (
      <div>
        <CustomTextInput ref={this.textInput} />
        <button onClick={this.pFocusTextInput}>父button</button>
      </div>

    );
  }
}