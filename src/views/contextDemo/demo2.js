import React from 'react'

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyThemeContext';
export default class Demo2 extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
const ThemeContext1 = React.createContext('light');
function Toolbar (){
    return (
      <ThemeContext1.Provider value='blue'>
        <div>
          <ThemedButton />
        </div>
      </ThemeContext1.Provider>
    )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “blue”。
  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象
  static contextType = ThemeContext;
  static contextType1 = ThemeContext1
  render() {
    return (
      <div>
        <button theme={this.context}>{this.context}</button>
        <button theme={this.contextType1}>{this.contextType1}</button>
      </div>
      )
  }
}