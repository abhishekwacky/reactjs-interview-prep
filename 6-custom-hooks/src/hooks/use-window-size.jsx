import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //registering a listener so your code gets notified every time the browser window is resized
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
};

export default useWindowSize;
