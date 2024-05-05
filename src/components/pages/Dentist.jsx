import React from 'react'
import './den.css'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import TopHeader from '../header/TopHeader'
export default function Dentist() {
  return (
    <div>
        <TopHeader/>
        <div>

        <div className='border- 2 w-full bg-blue h-[50%]'>
       
       <div className='flex justify-evenly px-8 py-3 text-2xl text-white'>
           {/* <h1 className='text-5xl'>LOGO</h1> */}
           <div>
             <img src={" "} className='w-[50%] h -[100%]'/>
           </div>
           <div className='flex px-10 gap-10'>
           <div>
           <Link to={'/'}>Home</Link>
           </div>
           <div>
           <Link to={'service'}>Services</Link>
          
             
       
           </div>
           
           <div>
           <Link to={'dentis'}>Dentist</Link>
           </div>
           <div>
           <Link to={'about'}>About Us</Link>
           </div>
           <div>
           <Link to={'contact'}>Contact</Link>
           </div>
           </div>
       
       </div>
                   </div>
        </div>
        <div id='im'>
<div>

</div>

<div className='flex justify-center'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-center text-3xl font-serif text-white py-4 mt-8'>Dentist</h1>
                            <h2 className='text-center text-5xl font-serif text-den py-3' >
           
                 
                            
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' What we Do  ?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Our Specialist ',
        1000,
        ' Our Specialist  ',
        1000,
        ' Our Specialist  ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                            </h2>
                            
                        </div>
        </div>
        </div>
    </div>
  )
}
