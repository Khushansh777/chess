import React, { useEffect } from 'react'
import Board from '../component/Board'
type props = {
  initBoard: (name: string[][]) => void,
  board: string[][]
}
const InitialBoard = ({ initBoard, board }: props) => {
  const boardArray: string[][] = [
    ['br', 'bk', 'bb', 'bq', 'bki', 'bb', 'bk', 'br',],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp',],
    ['', '', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '', '',],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp',],
    ['wr', 'wk', 'wb', 'wq', 'wki', 'wb', 'wk', 'wr',],

  ]

  useEffect(() => {
    initBoard(boardArray)
  })
  return (
    <div>
      <Board board={board} />
    </div>
  )
}

export default InitialBoard