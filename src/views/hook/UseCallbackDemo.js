import React, { useRef, useEffect, useState, useCallback } from 'react';

function Child({ event, data }) {
  console.log("child-render");
  // 第五版
  useEffect(() => {
    console.log('child-useEffect');
    event();
  }, [event]);
  return (
    <div>
      <p>child</p>
      {/* <p>props-data: {data.data && data.data.openCode}</p> */}
      <button onClick={event}>调用父级event</button>
    </div>
  );
}

const set = new Set();

function Demo8() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  // 第一版
  // const handle = async () => {
  //   const response = await fetch(
  //     "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   console.log("handle", data);
  //   setData(res);
  // };

  // 第二版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     “https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   console.log(“handle”, data);
  //   setData(res);
  // });

  // 第三版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     “https://www.mxnzp.com/api/lottery/common/latest?code=ssq”
  //   );
  //   const res = await response.json();
  //   setData(res);
  //   console.log(“useCallback”, data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // 第四版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     “https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   setData(res);
  //   console.log(“parent-useCallback", data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // 第五版
  const handle = useCallback(async () => {
   /* const response = await fetch(
      "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
    );
    const res = await response.json();*/
    const res = {
      data:{
        openCode: 1,
      }
    }
    setData(res);
    console.log("parent-useCallback", count, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  set.add(handle);
  console.log('set', set)
  console.log('parent-render====>', data);
  return (
    <div>
      <button
        onClick={e => {
          setCount(count + 1);
        }}
      >
        count++
      </button>
      <p>set size: {set.size}</p>
      <p>count:{count}</p>
      <p>data: {data.data && data.data.openCode}</p>
      <p>-------------------------------</p>
      <Child event={handle} />
    </div>
  );
}
export default Demo8;