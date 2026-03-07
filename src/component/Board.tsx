import React from 'react'
import Square from './Square'
type props = {
  board: string[][]
}
const Board = ({ board }: props) => {
  return (
    <div className='grid grid-cols-8 grid-rows-8 w-[700px] h-[700px] border'>
      {board.map((r, rindex) => {
        return r.map((c, cindex) => {
          return <Square key={`${rindex}-${cindex}`} column={c} cindex={cindex} rindex={rindex} />
        })

      })}

    </div>
  )
}

export default Board