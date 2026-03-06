import React from 'react'
type props ={
    column: string,
    cindex:number,
    rindex:number
}

const Square = ({column, cindex, rindex}: props) => {
  return (
   <div key={cindex} className={`flex justify-center items-center text-center ${(rindex + cindex) % 2 === 0 ? 'bg-white' : 'bg-black'}`}>
              {column}
            </div>
  )
}

export default Square