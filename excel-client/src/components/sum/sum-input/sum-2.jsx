import React from 'react';
import {useProvider} from "../../../provider.jsx";

export const Sum2 = () => {

    const {
        headerOne2, categoryOne2,
        headerTwo, categoryTwo,
        changeValue,
    } = useProvider().providing;

    return (
        <div className={`flex flex-row justify-center items-center space-x-4 text-[20px]`}>
            <div className={`flex flex-col justify-center items-center space-y-2 text-[20px]`}>
                <div className={`border-b-2 border-white`}>
                    <input
                        className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                        placeholder={`Header 1`}
                        type={`text`}
                        value={headerOne2}
                        onChange={(e) => changeValue('headerOne2', e)}
                    />
                </div>

                <div className={`border-b-2 border-white`}>
                    <input
                        className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                        placeholder={`Category 1`}
                        type={`text`}
                        value={categoryOne2}
                        onChange={(e) => changeValue('categoryOne2', e)}
                    />
                </div>
            </div>

            <div className={`flex flex-col justify-center items-center space-y-2 text-[20px`}>
                <div className={`border-b-2 border-white`}>
                    <input
                        className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                        placeholder={`Header 2`}
                        type={`text`}
                        value={headerTwo}
                        onChange={(e) => changeValue('headerTwo', e)}
                    />
                </div>

                <div className={`border-b-2 border-white`}>
                    <input
                        className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                        placeholder={`Category 2`}
                        type={`text`}
                        value={categoryTwo}
                        onChange={(e) => changeValue('categoryTwo', e)}
                    />
                </div>
            </div>
        </div>
    );
}
