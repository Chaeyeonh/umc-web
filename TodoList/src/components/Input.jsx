import React from 'react';

const Input = ({ type = 'text', value, onChange, defaultValue, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      className={className}
    />
  );
};

export default Input;
