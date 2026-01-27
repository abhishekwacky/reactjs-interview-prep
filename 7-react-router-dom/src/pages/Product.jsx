import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSrearchParams = (newParams) => {
    const paramObject = Object.fromEntries(searchParams.entries());
    const mergedParams = { ...paramObject, ...newParams };
    setSearchParams(mergedParams);
  };
  return (
    <div>
      <h4>Colors</h4>
      <button onClick={() => updateSrearchParams({ color: "red" })}>red</button>
      <button onClick={() => updateSrearchParams({ color: "white" })}>
        white
      </button>

      <h4>Size</h4>
      <button onClick={() => updateSrearchParams({ size: 10 })}>10</button>
      <button onClick={() => updateSrearchParams({ size: 11 })}>11</button>
      <button onClick={() => updateSrearchParams({ size: 12 })}>12</button>
    </div>
  );
};

export default Product;
