import React from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  return <input ref={ref} {...props} className="border rounded p-2" />;
});

Input.displayName = 'Input';

export default Input;