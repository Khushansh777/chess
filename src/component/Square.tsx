import React from 'react'
type props ={
    column: string,
    cindex:number,
    rindex:number
}

const Square = ({column, cindex, rindex}: props) => {
  return (
   <div key={cindex} className={`flex items-center justify-center w-full h-full text-5xl ${(rindex + cindex) % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}>
              {column}
            </div>
  )
}

export default Square