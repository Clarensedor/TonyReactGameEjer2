import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogicAnswer from '../Components/logicAnswer/index';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogicAnswer/>
    </>
  )
}

export default App
