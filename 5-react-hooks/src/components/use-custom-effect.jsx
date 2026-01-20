import { useRef } from "react";

export const useCustomEffect = (cb, dependency) => {
  const isFirstRender = useRef(true);
  const prevdeps = useRef([]);
  console.log("prevdeps", prevdeps);

  // First render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    cb();
    return;
  }

  //cleanup case-1
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = cb();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  // Dependency changes or No Deps Array
  console.log("case-1", JSON.stringify(dependency));
  console.log("case-2", JSON.stringify(prevdeps.current));
  const depsChanged = dependency
    ? JSON.stringify(dependency) !== JSON.stringify(prevdeps.current)
    : true;

  if (depsChanged) {
    const cleanup = cb();
    if (cleanup && typeof cleanup === "function" && dependency) {
      cleanup();
    }
  }

  // Cleanup

  prevdeps.current = dependency || [];
};

// export default useCustomEffect;
