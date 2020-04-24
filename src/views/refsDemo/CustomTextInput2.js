import React from 'react'

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
      <div>{props.inputRef}</div>
    </div>
  );
}

export default class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}