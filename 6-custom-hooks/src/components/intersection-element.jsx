import React, { useMemo, useRef } from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";

const IntersectionElement = () => {
  const ref = useRef(null);

  const options = useMemo(
    () => ({
      root: null, // By default it is going to take browser as a root
      rootMargin: "0px",
      threshold: 0.5, // It should be 50% visible
    }),
    [],
  );

  const intersectionEntry = useIntersectionObserver(ref, options);
  console.log("isIntersecting", intersectionEntry?.isIntersecting);
  console.log("Intersection Ratio", intersectionEntry?.intersectionRatio);
  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <div ref={ref} style={{ height: "50vh", background: "lightblue" }}>
        Abhishek Kumar
      </div>
    </div>
  );
};

export default IntersectionElement;

// Notes to keep in mind: -
// - IntersectionObserver watches an element and tells you when it enters or leaves the screen (viewport).
//   Instead of constantly asking:
//  “Is this element visible yet??”
//    …the browser tells you:
//       “Hey, it just became visible.”

// - We pass a ref to an element because React itself does not give you direct access to the actual DOM element.
//   A ref is how you say: “Hey React, give me a direct handle to that element.”
