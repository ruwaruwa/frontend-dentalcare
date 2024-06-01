import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderOner from './components/header/HeaderOner'
import TopHeader from './components/header/TopHeader'
import SectionTwo from './components/SectionTwo/SectionTwo'

import { Route, Routes } from 'react-router-dom'
import Service from './components/pages/Service'
import Dentist from './components/pages/Dentist'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-gray-300 text-4xl font-black'></h1>
     {/* <TopHeader/> */}
     {/* <HeaderOner/> */}
        {/* <TopHeader/> */}
     {/* <HeaderOner/> */}
<Routes>
<Route path='/' element={<HeaderOner/>} />
<Route path='service' element={<Service/>} />
<Route path='dentis' element ={<Dentist/>} />
<Route path='about' element={<About/>} />
<Route path='contact' element={<Contact/>}/>
</Routes>
     {/* <SectionTwo/> */}
    </>
  )
}

export default App
