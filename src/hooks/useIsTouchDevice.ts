"use client"

import { useState, useEffect } from 'react';

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {

    if (window.matchMedia) {
      const matchCoarse = window.matchMedia('(pointer: coarse)').matches;
      if (matchCoarse) {
        setIsTouch(true);
        return;
      }
    }

    const hasTouchPoints = navigator.maxTouchPoints > 0;
    const hasTouchEvents = 'ontouchstart' in window;

    setIsTouch(hasTouchPoints || hasTouchEvents);
  }, []);

  return isTouch;
}
