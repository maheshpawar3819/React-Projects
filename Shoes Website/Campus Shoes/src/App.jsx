import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Body from './Components/Body'
import Mens from './Components/Mens'
import Womens from './Components/Womens'
import Kids from './Components/Kids'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    {/* <Body/> */}
    {/* <Mens/> */}
    {/* <Womens/> */}
    <Kids/>
    </>
  )
}

export default App
