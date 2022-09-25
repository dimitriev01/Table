import React from 'react';
import cl from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  className?: string
  ref?: React.ForwardedRef<HTMLInputElement>
  query: string
  setQuery: (query: string) => void
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, disabled, query, setQuery }, ref) => {
  return (
    <input
      disabled={disabled}
      className={[cl.input, className].join(' ')}
      ref={ref}
    />
  );
});

export default Input;