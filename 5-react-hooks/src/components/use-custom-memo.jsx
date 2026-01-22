import React, { memo, useEffect, useRef } from "react";

const areDepsEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }
  return true;
};

//useMemo takes 2 things. 1. Callback Func 2. dependency array
export const useCustomMemo = (cb, deps) => {
  //variable or state -> cached Value
  //if we take normal varibale or state value then after render value will be lost of we will use useRef hook
  const memoizedRef = useRef(null);
  //Changes in deps
  if (!memoizedRef.current || !areDepsEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  //cleanup logic

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  //return the memoized value if any
  return memoizedRef.current.value;
};
