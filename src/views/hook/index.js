import React from 'react'
import UseEffectDemo from './demo'
import HookRuls from './demo1'
import UseContextDemo from './UseContextDemo'
import Counter from './UseReducerDemo'
import UseCallbackDemo from './UseCallbackDemo'
import UseMemoDemo from './UseMemoDemo'
import UseRefDemo from './UseRefDemo'
import UseImperativeHandleDemo from './UseImperativeHandleDemo'
import UseDebugValueDemo from './UseDebugValueDemo'

function HooksDemo() {
  return(
    <div>
      <p>useState useEffect demo </p>
      <UseEffectDemo/>
      <p>只在最顶层使用 Hook 不要在循环，条件或嵌套函数中调用 Hook</p>
      <HookRuls/>
      <p>useContext 使用</p>
      <UseContextDemo/>
      <p>useReducer 使用</p>
      <Counter/>
      <p>useCallback 使用</p>
      <UseCallbackDemo/>
      <p>useMemo 使用</p>
      <UseMemoDemo/>
      <p>useRef 使用</p>
      <UseRefDemo/>
      <p>useImperativeHandle 使用</p>
      <UseImperativeHandleDemo/>
      <p>useDebugValue 使用</p>
      <UseDebugValueDemo/>
    </div>
)
}

export default HooksDemo