import React from 'react';
import {useProvider} from "../../../provider.jsx";
import {Sum1} from "../sum-input/sum-1.jsx";
import {Sum2} from "../sum-input/sum-2.jsx";
import {Sum3} from "../sum-input/sum-3.jsx";
import {Sum4} from "../sum-input/sum-4.jsx";

export const SumSelector = () => {

    const {activeWindow, setActiveWindow, setIsSumTwoResultWindow} = useProvider().providing;

    const clickSum1 = () => {
        setActiveWindow('first');
        setIsSumTwoResultWindow(false);
    }
    const clickSum2 = () => {
        setActiveWindow('second');
        setIsSumTwoResultWindow(true);
    }

    const clickSum3 = () => {
        setActiveWindow('third')
        setIsSumTwoResultWindow(false);
    }

    const clickSum4 = () => {
        setActiveWindow('four');
        setIsSumTwoResultWindow(false);
    }


    return (
        <div className={`absolute top-6 right-[40px]`}>
            <div className={`flex flex-row justify-center items-center w-[500px] h-[50px] space-x-2`}>

                <button type={`button`} className={`selector-buttons
                ${activeWindow === 'first' ? 'selector-buttons-active' : ''}`}
                        onClick={clickSum1}
                >
                    1
                </button>

                <button type={`button`} className={`selector-buttons
                ${activeWindow === 'second' ? 'selector-buttons-active' : ''}`} onClick={clickSum2}
                >
                    2
                </button>

                <button type={`button`} className={`selector-buttons
                ${activeWindow === 'third' ? 'selector-buttons-active' : ''}`}
                        onClick={(clickSum3)}
                >
                    3
                </button>

                <button type={`button`} className={`selector-buttons
                ${activeWindow === 'four' ? 'selector-buttons-active' : ''}`}
                        onClick={clickSum4}
                >
                    4
                </button>

            </div>
        </div>

    );
}

export function RenderWindow() {

    const {activeWindow} = useProvider().providing;

    switch (activeWindow) {
        case 'first':
            return <Sum1/>
        case 'second':
            return <Sum2/>
        case 'third':
            return <Sum3/>
        case 'four':
            return <Sum4/>
    }
}