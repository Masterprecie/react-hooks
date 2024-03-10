import { useRef } from 'react';
import Counter, { CounterRef } from './Counter';
import TextInput, { TextInputRef } from './TextInput';

export default function UseImperative() {
  const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<TextInputRef>(null);

  return (
    <div>
      {/* <h1>UseImperative Hook</h1> */}
      <Counter ref={counterRef} />

      <button
        type="button"
        onClick={() => counterRef.current?.checkSubscribed(true)}
      >
        Reset from parent
      </button>
      <br />
      <TextInput ref={inputRef} />
      <button
        type="button"
        onClick={() => inputRef.current?.reset()}
      >
        Reset from parent
      </button>
    </div>
  );
}
