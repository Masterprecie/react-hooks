/* eslint-disable max-len */
import React, { useImperativeHandle } from 'react';
// useImperativeHandle is a custom hook that allows you to customize the instance value that is exposed to parent components when using ref.
// useImperativeHandle is used to expose certain functions or methods to parent components when using ref.

export interface TextInputRef {
  reset: () => void;
}

const TextInput = React.forwardRef<TextInputRef, {}>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return <input ref={inputRef} />;
});

export default TextInput;
