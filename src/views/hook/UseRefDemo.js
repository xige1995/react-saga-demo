import React, { useRef, useEffect } from 'react'

function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log('id', id)
    },1000);
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  function handleCancelClick() {
    console.log('clearInterval')
    clearInterval(intervalRef.current);
  }

  return(
    <div>
      <p>ref</p>
      <button onClick={handleCancelClick}>clearInterval</button>
    </div>
  )
}

export default Timer