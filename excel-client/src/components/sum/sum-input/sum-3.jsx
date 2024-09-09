import React from 'react';

export const Sum3 = () => {
  return (
      <div className={`flex flex-row justify-center items-center space-x-4 text-[20px]`}>
        <div className={`flex flex-col justify-center items-center space-y-2 text-[20px]`}>
          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Header 1`}/>
          </div>

          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Category 1`}/>
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center space-y-2 text-[20px`}>
          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Header 2`}/>
          </div>

          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Category 2`}/>
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center space-y-2 text-[20px`}>
          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Header 3`}/>
          </div>

          <div className={`border-b-2 border-white`}>
            <input className={`bg-transparent text-white text-center border-none ring-0 outline-none w-[150px] h-[30px] `}
                   placeholder={`Category 3`}/>
          </div>
        </div>
      </div>
  )
}
