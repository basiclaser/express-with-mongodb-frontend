import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [st, setSt] = useState([])
  useEffect(()=>{
    console.log(`${import.meta.env.VITE_STUDENTS_API}/students`)
    fetch(`${import.meta.env.VITE_STUDENTS_API}/students`)
    .then(res => res.json())
    .then(data => setSt(data))
  },[])
  useEffect(()=>{
    console.log(st)
  },[st])

  return (
    <div className="App">
      {st.map(s => <li>{s.first_name}</li>)}
    </div>
  )
}

export default App
