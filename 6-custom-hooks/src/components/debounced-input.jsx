import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/use-debounce";

const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {
    console.log("Function Called from debounce");
  });

  //if something is dependent on debouncedValue then

  useEffect(() => {
    // make an api call
  }, [debouncedValue]);

  return (
    <div>
      {debouncedValue}
      <br />
      <input
        type="text"
        value={inputText}
        placeholder="Type Something...."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedInput;
