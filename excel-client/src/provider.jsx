import React, {createContext, useContext, useState} from 'react';

const ProviderContext = createContext();
export const Provider = ({children}) => {

    const [activeWindow, setActiveWindow] = useState('');
    const [headerOne, setHeaderOne] = useState('');
    const [categoryOne, setCategoryOne] = useState('');
    const [headerSum, setHeaderSum] = useState('');

    const [headerOne2, setHeaderOne2] = useState('');
    const [categoryOne2, setCategoryOne2] = useState('');
    const [headerTwo, setHeaderTwo] = useState('');
    const [categoryTwo, setCategoryTwo] = useState('');
    const [headerSum2, setHeaderSum2] = useState('');

    const [isSumTwoResultWindow, setIsSumTwoResultWindow] = useState(false);
    const [totalSheet, setTotalSheet] = useState(0);
    const setTextFormat = (value) => {
        return value.replace(/\s+/g, '');
    }
    const changeValue = (type, e) => {
        let value = e.target.value;
        if (value !== ''){
            value = setTextFormat(value);
        } else {
            value = '';
        }

        switch (type){
            case 'headerOne':
                setHeaderOne(value);
                break;
            case 'categoryOne':
                setCategoryOne(value);
                break;
            case 'headerSum':
                setHeaderSum(value);
                break;
            case 'headerOne2':
                setHeaderOne2(value);
                break;
            case 'categoryOne2':
                setCategoryOne2(value);
                break;
            case 'headerTwo':
                setHeaderTwo(value);
                break;
            case 'categoryTwo':
                setCategoryTwo(value);
                break;
            case 'headerSum2':
                setHeaderSum2(value);
                break;
            default:
                alert(`Error: change value is invalid!`);
        }
    }

    const providing = {
        changeValue,
        activeWindow, setActiveWindow,
        headerOne, setHeaderOne, categoryOne, setCategoryOne,
        headerSum, setHeaderSum,
        headerOne2, setHeaderOne2,
        categoryOne2, setCategoryOne2,
        headerTwo, categoryTwo,
        headerSum2, setHeaderSum2,
        isSumTwoResultWindow, setIsSumTwoResultWindow,
        totalSheet, setTotalSheet
    }

  return (
    <ProviderContext.Provider value={{providing}}>
        {children}
    </ProviderContext.Provider>
  );
}

export function useProvider(){
    return useContext(ProviderContext);
}