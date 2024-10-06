import { useEffect, useState } from 'react';
import './App.css'
import { tasksOrder } from './assessment';

function App() {

  const [showResult, setShowResult] = useState('')

  const tasks = [
    { task: 'A', dependencies: [] },
    { task: 'B', dependencies: ['A'] },
    { task: 'C', dependencies: ['B'] },
    { task: 'D', dependencies: ['A', 'B'] }
  ];

useEffect(() => {
  setShowResult(tasksOrder(tasks))
}, [])

  


  return (
    <div className='w-full flex h-[100vh] flex-col gap-2 items-center justify-center'>
      <span className='text-4xl'>HELLO NXT!</span>
      <span className='text-lg'> The Answer is: {showResult}</span>
    </div>
  )
}

export default App
