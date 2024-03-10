import { useReducer } from 'react';

interface State {
  count: number;
  error: string | null
}

interface Action {
  type: 'increment' | 'decrement'
}

function reducer(state:State, action :Action) {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Count cannot be more than 5' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum Reached' : null,
      };
    }
    default:
      return state;
  }
}
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div>
      <div>
        Count:
        {' '}
        {state.count}
      </div>
      {state.error && (
        <div style={{ color: 'red' }}>{state.error}</div>
      )}
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
