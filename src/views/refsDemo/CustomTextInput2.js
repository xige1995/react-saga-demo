import React from 'react'

function CustomTextInput(props) {
  return (
      <input ref={props.inputRef} />
  );
}

export default class Parent extends React.Component {
  focus(){
    this.inputElement.focus()
  }
  render() {
    return (
      <div>
        {/*Parent 把它的 refs 回调函数当作 inputRef props 传递给了 CustomTextInput，
        而且 CustomTextInput 把相同的函数作为特殊的 ref 属性传递给了 <input>。
        结果是，在 Parent 中的 this.inputElement 会被设置为与 CustomTextInput 中的
        input 元素相对应的 DOM 节点。*/}

        <CustomTextInput inputRef={el => this.inputElement = el}/>
        <input type="button" value='Focus' onClick={() => this.focus()}/>
      </div>
    );
  }
}