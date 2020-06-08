import React, { useState, useMemo } from 'react';

function Demo9() {
  const [count, setCount] = useState(0);
  const set = new Set();
  const handle = () => {
    console.log('handle', count);
    return count;
  };
  const handle1 = useMemo(() => {
    console.log("handle1", count);
    return count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handle2 = useMemo(() => {
    console.log('handle2', count);
    // 大计算量的方法
    return count;
  }, [count]);
  set.add(handle2)
  console.log('set', set)
  console.log("render-parent");
  return (
    <div>
      <div>
        <p><button onClick={() => setCount(count + 1)}> count++ </button></p>
         <p>count: {count}</p>
      </div>
      <p>-------------------</p>
      <Child handle={handle2} />
    </div>
  );
}
export default Demo9;

function Child({ handle }) {
  console.log("render-child");
  return (
    <div>
      <p>child</p>
      <p>props-data: {handle}</p>
    </div>
  );
}
