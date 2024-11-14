// hooks/useDebounce.js
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Clean up the timeout if the value changes before delay ends
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
