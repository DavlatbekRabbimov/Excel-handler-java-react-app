import React, {useEffect, useState} from 'react';
import {useProvider} from "../../../provider.jsx";
import axios from "axios";

export const SumResult2 = () => {

    const {
        headerOne2, categoryOne2, headerTwo, categoryTwo,
        headerSum2,
        changeValue
    } = useProvider().providing;

    const [sumTwoResult, setSumTwoResult] = useState(0.0);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(`http://localhost:8080/api/sum-two/${headerOne2}/${categoryOne2}/${headerTwo}/${categoryTwo}/${headerSum2}`);
                setSumTwoResult(res.data);
            }
            fetchData();
        } catch (err) {
            alert(`Error: SumOne result is not gotten! - ${err}`);
        }

    }, [headerOne2, categoryOne2, headerTwo, categoryTwo, headerSum2]);

    return (
        <div className={`absolute top-[107px] right-48 w-[200px] h-[100px]`}>
            <div className={`flex flex-col justify-center items-center h-[75px] p-2 text-white border-2`}>
                <div className={`border-b-2 border-white`}>
                    <input
                        className={`bg-transparent text-white text-center text-[20px] border-none ring-0 outline-none w-[150px] h-[30px] `}
                        placeholder={`Header for sum`}
                        type={`text`}
                        value={headerSum2}
                        onChange={(e) => changeValue('headerSum2', e)}
                    />
                </div>
                <h1 className={`text-[25px]`}> {sumTwoResult && sumTwoResult || '0.00'} </h1>
            </div>
        </div>
    );
}
