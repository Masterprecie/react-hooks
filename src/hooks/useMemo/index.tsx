/* eslint-disable max-len */
import { useMemo, useState } from 'react';
import { initialItems } from '../../utils';

export default function UseMemo() {
  // useMemo is a hook that allows you to memoize the result of a function
  // useMemo returns a memoized value
  // useMemo takes two arguments, the first argument is a function that returns the memoized value
  // the second argument is an array of dependencies
  // useMemo is similar to useCallback, but it returns the result of the function, not the function itself
  // useMemo is used to optimize performance
  // useMemo is used to avoid unnecessary re-renders
  // useMemo is used to avoid unnecessary calculations
  // useMemo is used to avoid unnecessary computations
  // useMemo is used to avoid unnecessary expensive operations

  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItems = useMemo(() => items.find((item) => item.id === count), [count, items]);
  return (
    <div>
      <h1>
        Count:
        {count}
      </h1>
      <h1>
        Selected item :
        {selectedItems?.id}
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}
