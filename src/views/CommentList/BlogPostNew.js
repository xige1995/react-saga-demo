import React from 'react'
import TextBlock from './TextBlock'

export default  function(props) {
  return (
    <div>
      <TextBlock text={props.data[0]} />
      <p>{props.extra}</p>
    </div>
  )
}
