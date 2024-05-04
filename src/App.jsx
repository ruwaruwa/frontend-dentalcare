import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderOner from './components/header/HeaderOner'
import TopHeader from './components/header/TopHeader'
import SectionTwo from './components/SectionTwo/SectionTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-gray-300 text-4xl font-black'></h1>
     <TopHeader/>
     <HeaderOner/>
     {/* <SectionTwo/> */}
    </>
  )
}

export default App
