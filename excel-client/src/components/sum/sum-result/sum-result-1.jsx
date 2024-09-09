import React, {useEffect, useState} from 'react';
import {useProvider} from "../../../provider.jsx";
import axios from "axios";

export const SumResult1 = () => {

    const {
        headerOne, categoryOne, headerSum, changeValue
    } = useProvider().providing;

    const [sumResult, setSumResult] = useState(0.0);

    useEffect(() => {
        try {
            const fetchData = async () => {
                if (headerOne && categoryOne && headerSum) {
                    const res = await axios.get(`http://localhost:8080/api/sum-one/${headerOne}/${categoryOne}/${headerSum}`);
                    setSumResult(res.data);
                }
            }
            fetchData();
        } catch (err){
            alert(`Error: SumOne result is not gotten! - ${err}`);
        }

    }, [headerOne, categoryOne, headerSum]);

    return (
        <div className={`absolute top-[107px] right-48 w-[200px] h-[100px]`}>
            <div className={`flex flex-col justify-center items-center h-[75px] p-2 text-white border-2`}>
                <div className={`border-b-2 border-white`}>
                    <input className={`bg-transparent text-white text-center text-[20px] border-none ring-0 outline-none w-[150px] h-[30px] `}
                           placeholder={`Header for sum`}
                           type={`text`}
                           value={headerSum}
                           onChange={(e) => changeValue('headerSum', e)}
                    />
                </div>
                <h1 className={`text-[25px]`}> {sumResult && sumResult || '0.00'} </h1>
            </div>
        </div>
    );
}
