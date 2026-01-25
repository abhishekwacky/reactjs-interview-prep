import React, { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const cb = (entries) => {
        setIntersectionObserverEntry(entries[0]); // we are only taking the latest enteries from here
      };

      const observer = new IntersectionObserver(cb, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionObserverEntry;
};

export default useIntersectionObserver;
