import React from 'react'
import Square from './Square'
type props = {
  board: string[][]
}
const Board = ({ board }: props) => {
  return (
    <div className='grid grid-cols-8 w-[800px] h-[800px] border border-black'>
      {board.map((r, rindex) => {
        return r.map((c, cindex) => {
          return <Square key={`${rindex}-${cindex}`} column={c} cindex={cindex} rindex={rindex} />
        })

      })}

    </div>
  )
}

export default Board