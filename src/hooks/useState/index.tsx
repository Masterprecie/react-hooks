import { useState } from 'react';

export default function UseState() {
  // useState is a hook that allows you to have state variables in functional components
  // useState returns an array with two elements
  // the first element is the current state value
  // the second element is a function that allows you to update the state value
  // useState takes one argument, the initial state value

  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const handleToggleText = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>UseState Hook</h1>
      {toggle ? <p>Toggle Text</p> : <p>Initial Text</p>}

      <button type="button" onClick={handleToggleText}>
        Toggle Text
      </button>

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
