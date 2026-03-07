import React, { useEffect } from 'react'
import Board from '../component/Board'
type props = {
  initBoard: (name: string[][]) => void,
  board: string[][]
}
const InitialBoard = ({ initBoard, board }: props) => {
  const boardArray: string[][] = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],


  ]

  useEffect(() => {
    initBoard(boardArray)
  },)
  return (
    <div>
      <Board board={board} />
    </div>
  )
}

export default InitialBoard