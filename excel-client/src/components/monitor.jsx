import React, {useState} from 'react';
import axios from 'axios';
import {FaFileAlt} from "react-icons/fa";
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";
import {useProvider} from "../provider.jsx";

export const Monitor = () => {

    const [dataList, setDataList] = useState([]);
    const {totalSheet} = useProvider().providing;
    const [number, setNumber] = useState(0);
    let newNumber = 0;
    const clickHandleFile = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/data-list`);
            setDataList(res.data.map(row => row.split(', ')));
        } catch (err) {
            alert(`Error: data list is not gotten from server! - ${err}`);
        }
    };

    const updateNumber = async (newNumber) => {
        setNumber(newNumber);
        try {
            await axios.post(`http://localhost:8080/api/slide-number/${newNumber}`);
        } catch (err) {
            alert(`Error: number is not posted! - ${err}`);
        }
    }

    const clickNext = () => {
        if (number < totalSheet - 1) {
            newNumber = number + 1;
            updateNumber(newNumber);
            console.log(newNumber);
        }
    }

    const clickPrev = () => {
        if (number > 0) {
            newNumber = number - 1;
            updateNumber(newNumber);
            console.log(newNumber);
        }
    }

    return (
        <div className={`absolute bottom-20`}>
            <div className={`flex justify-center items-center w-[1200px] h-[450px] bg-white text-black overflow-auto rounded-lg font-poppins`}>

                <table className="table-auto border-collapse">

                    <thead>
                    <tr>
                        {dataList.length > 0 && dataList[0].map(
                            (header, index) =>
                                <th key={index}
                                    className="px-4 py-2 sticky top-0 bg-green-600 text-white">{header}</th>)
                        }
                    </tr>
                    </thead>

                    <tbody>
                    {dataList.slice(1).map(
                        (row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map(
                                    (cell, cellIndex) =>
                                        <td key={cellIndex} className="border px-4">{cell}</td>)
                                }
                            </tr>
                        ))}
                    </tbody>

                </table>

                <div className={`absolute -bottom-16 left-0 w-[150px] h-[50px] text-white cursor-pointer`}>
                    <div className={`w-[150px] h-[45px] flex justify-center items-center bg-slate-700 hover:bg-blue-600 rounded-lg whitespace-nowrap space-x-2`}>
                        <FaFileAlt/>
                        <button type={`submit`}
                                className={`font-poppins`}
                                onClick={clickHandleFile}
                        >
                            Handle file
                        </button>
                    </div>
                    <button type={`submit`}
                            className={`absolute bottom-2 left-44 text-[30px] text-slate-700 hover:text-blue-600 border-2 border-white rounded-full`}
                            onClick={clickPrev}
                    >
                        <FaCircleArrowLeft className={`bg-white rounded-full border-none ring-0 outline-none`}/>
                    </button>

                    <div className={`absolute bottom-2 left-[225px] text-[25px]`}>{number}</div>

                    <button type={`submit`}
                            className={`absolute bottom-2 left-64 text-[30px] text-slate-700 hover:text-blue-600 border-2 border-white rounded-full`}
                            onClick={clickNext}
                    >
                        <FaCircleArrowRight className={`bg-white rounded-full border-none ring-0 outline-none`}/>
                    </button>
                </div>
            </div>
        </div>
    );
};