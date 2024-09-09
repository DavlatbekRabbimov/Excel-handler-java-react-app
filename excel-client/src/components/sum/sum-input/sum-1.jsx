import React from 'react';
import {useProvider} from "../../../provider.jsx";

export const Sum1 = () => {

    const {
        headerOne, categoryOne,
        changeValue
    } = useProvider().providing;


    return (
        <div className={`flex flex-col justify-center items-center space-y-2 text-[20px]`}>
            <div className={`border-b-2 border-white`}>
                <input
                    className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                    placeholder={`Header`}
                    type={`text`}
                    value={headerOne}
                    onChange={(e) => changeValue('headerOne', e)}
                />
            </div>

            <div className={`border-b-2 border-white`}>
                <input
                    className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                    placeholder={`Category`}
                    type={`text`}
                    value={categoryOne}
                    onChange={(e) => changeValue('categoryOne', e)}
                />
            </div>
        </div>
    );
}
