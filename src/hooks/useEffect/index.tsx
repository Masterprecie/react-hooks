/* eslint-disable max-len */
import { useEffect, useState } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  // useEffect is used to handle side effects in your component, like data fetching, subscriptions, or manually changing the DOM
  // useEffect is called after every render of the component
  // useEffect takes two arguments, the first is a function and the second is an array of dependencies
  // if the array of dependencies is empty, the function inside useEffect will only be called once after the first render
  // if the array of dependencies is not empty, the function inside useEffect will be called after every render if the dependencies have changed

  useEffect(() => {
    console.log(count);

    // add a cleanup function

    return () => {
      console.log('clean up');
    };
  }, [count]);

  return (
    <div>
      <h1>UseEffect Hook</h1>

      <h1>
        Count:
        {count}
      </h1>

      <button type="button" onClick={() => setCount(count + 1)}>
        increase
      </button>

      <button type="button" onClick={() => setCount(count - 1)}>
        decrease
      </button>

      <button type="button" onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}
