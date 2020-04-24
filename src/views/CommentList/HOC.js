import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import DataSource from './DataSource'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const withSubscription = function(WrappedComponent, selectData) {

  class WithSubscription extends React.Component {
    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.add = this.add.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    componentDidMount(){
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
      this.add()
    }

    componentWillUnmount(){
      DataSource.removeChangeListener(this.handleChange)
    }

    add(){
      setTimeout( () => {
        console.log('add', this.state.data)
        let temp = this.state.data
        temp.push({id: 3, label: 'new 4'})
        this.setState({
          data: temp
        })
      }, 2000)
    }

    handleChange(){
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render(){
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      // 应该透传与自身无关的 props
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
  // 包装显示名称以便轻松调试
  // WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`

  // 必须准确知道应该拷贝哪些方法
  WithSubscription.staticMethod = WrappedComponent.staticMethod

  // 使用 hoist-non-react-statics 自动拷贝所有非 React 静态方法
  hoistNonReactStatic(WithSubscription, WrappedComponent)
  return WithSubscription
}


export const logProps = function (WrappedComponent) {
 /* WrappedComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  return WrappedComponent;*/

  // 使用组合
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}