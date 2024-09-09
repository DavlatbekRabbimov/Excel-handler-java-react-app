import React from 'react';
import {SumResult2} from "./sum-result-2.jsx";
import {SumResult1} from "./sum-result-1.jsx";
import {useProvider} from "../../../provider.jsx";

export const SumResultWindow = () => {

    const {isSumTwoResultWindow} = useProvider().providing;

  return (
    <div>
        {
            isSumTwoResultWindow ? <SumResult2/> : <SumResult1/>
        }
    </div>
  );
}
