import React from 'react';
import {RenderWindow} from "../sum-selector/sum-selector.jsx";

export const SumWindow = () => {
  return (
    <div className={`absolute top-24`}>
      <div className={`flex flex-row justify-center items-center w-[500px] h-[50px]`}>
        {RenderWindow()}
      </div>
    </div>
  );
}
