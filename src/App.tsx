import  { useState } from 'react'
import InitialBoard from './engine/InitialBoard';


const App = () => {
  const [board, setBoard] = useState<string[][]>([[]]);
  const initBoard = (array: string[][]) => {
    setBoard(array);
  }
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
    <InitialBoard initBoard= {initBoard} board={board}/>
   
    </div>
  )
}

export default App
