import { useEffect, useState } from "react";

const useDebounce = (value, delays, cb = () => {}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      cb();
    }, delays);

    return () => clearTimeout(handler);
  }, [value, delays]);

  return debouncedValue;
};
// if the user type another value before delays is finished the this delay will start from that value
// typed - "h" after 500ms again he typed "e" then we will clean-up the older timer and create the new timer
//
export default useDebounce;
