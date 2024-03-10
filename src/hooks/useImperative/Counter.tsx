import {
  useState, forwardRef, useImperativeHandle,
} from 'react';

export type CounterRef = {
  checkSubscribed: (value: boolean) => void;
  reset: () => void;
};

const Counter = forwardRef<CounterRef, {}>((props, ref) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useImperativeHandle(ref, () => ({
    checkSubscribed: (value: boolean) => {
      if (value) {
        setCount(0);
      }
    },
    reset: () => {
      setCount(0);
    },
  }));

  return (
    <div>
      <button type="button" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
});

export default Counter;
