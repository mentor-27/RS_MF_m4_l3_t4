import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { useThrottle } from './useThrottle';
import { TViewportSize } from '../types';

export const useViewportSize = (): TViewportSize => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useWindowEvent('resize', () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  });

  const throttledSizes = useThrottle({ height, width });

  return {
    height: throttledSizes.height,
    width: throttledSizes.width,
  };
};
