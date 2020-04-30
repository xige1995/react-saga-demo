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
      DataSource.addChangeListener(this.handleChange);
      this.add()
    }

    componentWillMount(){
      DataSource.removeChangeListener(this.handleChange)
    }


    add(){
      setTimeout( () => {
        let temp = this.state.data
        temp.push({id: 3, label: '新添加的 评论4'})
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
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`

  // 必须准确知道应该拷贝哪些方法
  // WithSubscription.staticMethod0 = WrappedComponent.staticMethod0

  // 使用 hoist-non-react-statics 自动拷贝所有非 React 静态方法
  hoistNonReactStatic(WithSubscription, WrappedComponent)
  return WithSubscription
}


export const logProps = function (WrappedComponent) {
/*  WrappedComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('function 无效 Current props: ', this.props);
    console.log('function 无效 Previous props: ', prevProps);
  };
  return WrappedComponent;*/

  // 使用组合
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      console.log('Current props: ', this.props);
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;

      // 获取的时包装组件
      // return <WrappedComponent {...this.props} />;
    }
  }

  function forwardRef( props, ref) {
    console.log('React.forwardRef(( props, ref)', ref)
    return <LogProps {...props} forwardedRef={ref}/>
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef);

}