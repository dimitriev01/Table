import React from 'react';
import cl from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  ref?: React.ForwardedRef<HTMLInputElement>
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, disabled, ...otherProps }, ref) => {
  return (
    <input
      className={[cl.input, className].join(" ")}
      {...otherProps}
      ref={ref}
    />
  );
});

export default Input;