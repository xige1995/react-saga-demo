import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState
} from 'react';

// ref：需要传递的ref
// createHandle: 需要暴露给父级的方法。
// deps: 依赖
// useImperativeHandle(ref, createHandle, [deps])

const Child = forwardRef((props, ref) => {
  const inputEl = useRef();
  const [value, setVal] = useState("");
  // 第一版
  // useImperativeHandle(ref, () => {
  //   console.log("useImperativeHandle");
  //   return {
  //     value,
  //     focus: () => inputEl.current.focus()
  //   };
  // });

  // 第二版
  useImperativeHandle(
    ref,
    () => {
      console.log('useImperativeHandle');
      return {
        value,
        focus: () => inputEl.current.focus()
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  return (
    <input
      ref={inputEl}
      onChange={e => setVal(e.target.value)}
      value={value}
      {...props}
    />
  );
});
function Demo10() {
  const inputEl = useRef(null);

  useEffect(() => {
    console.log('parent-useEffect', inputEl.current);
    inputEl.current.focus();
  }, []);

  function click() {
    console.log("click:", inputEl.current);
    inputEl.current.focus();
  }
  console.log('Demo10', inputEl.current);
  return (
    <div>
      <Child ref={inputEl} />
      <button onClick={click}>click focus</button>
    </div>
  );
}
export default Demo10;