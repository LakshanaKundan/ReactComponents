import React from 'react'
import './App.css'
import Login from './login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'> 
      <Login/>
    </div>
      
    </>
  )
}

export default App
