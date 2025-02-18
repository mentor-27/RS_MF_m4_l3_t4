import { useEffect, useRef, useState } from 'react';

export const useThrottle = <T>(value: T, interval = 500): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearInterval(timerId);
    }
  }, [value, interval]);

  return throttledValue;
};
