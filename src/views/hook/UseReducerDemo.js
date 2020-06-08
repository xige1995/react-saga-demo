import React, {useReducer} from 'react'

const initCount = 0

function init(initCount) {
  return { count: initCount}
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '40px',
  height: '20px',
  padding: '0 10px',
  margin: '10px 20px'
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initCount, init)
  return (
    <div>
      <p>Count: {state.count}</p>
      <p style={{display: 'flex'}}>
        <button style={style} onClick={()=> dispatch({type: 'reset', payload: initCount})}> Reset </button>
        <button style={style} onClick={()=> dispatch({type: 'increment'})}> + </button>
        <button style={style} onClick={()=> dispatch({type: 'decrement'})}> - </button>
      </p>
    </div>
  )
}

export default Counter