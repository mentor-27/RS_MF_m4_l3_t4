import { TUseWindowEvent } from '../types';
import { useEffect } from 'react';

export const useWindowEvent: TUseWindowEvent = function (
  type,
  listener,
  options
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
};
