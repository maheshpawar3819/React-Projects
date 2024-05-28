import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

/*
Plan:
*Header
  -logo
  -Navitems
*Body
  -search
  -restaurent container
  -restaurent card
    -Name of restaurent,Star rating,cuisine,delivery time
*Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
