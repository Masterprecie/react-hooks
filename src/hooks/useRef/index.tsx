/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react';

export function UseRef() {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  // useRef doesn't trigger re-renders unlike useState
  // useRef is used to persist values between renders
  // useRef is used to persist values between function calls

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  //   const handleIncrease = () => setCount((prevCount) => prevCount + 1);
  const handleIncrease = () => {
    setCount(count + 1);
    countRef.current++;

    // console.log('State:', count);
    console.log('ref:', countRef.current);
  };
  return (
    <div>
      <h1>

        count:
        {' '}
        {count}
        {/* {countRef.current} */}
        {/* Do not use useRef directly inside the return method */}
      </h1>
      <button type="button" onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export function UseRef2() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something..." />
      {/* this way you can use useRef inside this component */}
    </div>
  );
}
