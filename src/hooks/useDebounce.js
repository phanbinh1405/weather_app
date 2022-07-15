import { useState, useEffect } from 'react';

function useDebounce(value, delay = 200) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
}

export default useDebounce;
