import { useState, useEffect } from "react";

const useDebounce = (value: string, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
