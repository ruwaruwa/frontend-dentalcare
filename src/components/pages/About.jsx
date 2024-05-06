import React from 'react'
import { Link } from 'react-router-dom'
import TopHeader from '../header/TopHeader'
 import './about.css'
import Footer from '../systemfooter/Footer'
export default function About() {
  return (
    <div>
            <TopHeader/>
     
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
      
       <div className="">
       <div id='ab' className='bg- den '>
<div className='text-center  text-2xl font-mono text-white'>
    <h1 className='pt-20 text-3xl'>About Us</h1>
<h1 className='mt-4 p-3 text-3xl text-white'>About Dental Care</h1>
<Link to={'/'} className='hover:text-den'>Home/About</Link>
</div>
        </div>
       </div>
        <Footer/>
    </div>
  )
}
