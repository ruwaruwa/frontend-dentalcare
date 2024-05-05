import React from 'react'
import logo from '../../assets/im.jpg'
import doc from '../../assets/doc.jpg'
import './hed.css'
import b from '../../assets/ban-01.jpg'
import doct from '../../assets/doc.jpg'
import SectionTwo from '../SectionTwo/SectionTwo'
import TopHeader from './TopHeader'
import { Link } from 'react-router-dom'
export default function HeaderOner() {
  return (
    <div>
      <TopHeader/>
        <div className='p-0'>
            {/* --start here-- */}
            <div className='border- 2 w-full bg-blue h-[50%]'>
       
<div className='flex justify-evenly px-8 py-3 text-2xl text-white  top-0'>
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
            {/* ---- */}
            <div id='' className='bg- gradient-to-tr from-blue to-blue opacity -90'>

            <div id='bg' className=' h-96 w-full bg-cover bg-center relative bg-gradient-to-tr from-blue to-blue opacity- 75  mb-10 p-1 text- center'>
           {/* <img className='w-full h-full object-cover absolute mix-blend-overlay screen  opacity- 45 '
            src='' /> */}
           <div id='dv' className=' p-2 grid grid-cols-1 sm:grid-cols-2 text-center py-10 mt-28  '>
      {/* <div className='mt-4'>
      <h1 className=' text-4xl font-bold mt-8  text-white '>Dental care</h1>
    <h1 className='text-5xl text-den font-extrabold px-2 line-clamp-6 mt-2'>Always Smile <br></br>Like twinkle</h1>
<p className='text-white font- text-2xl font- bold mt-2'>Dental care or dentalcare is the maintenance of <br></br> healthy teeth and
 may refer to Oral hygiene</p>
 <br>
 </br>
 <button className='mt-10 text-den text-3xl'>Contact us</button>
      </div> */}
      {/* <div className='px-10 mt-4'>
 <img src={doct} className='w-[500px] h-[500px] sm:ml-52 rounded-full hidden sm:block'/>
      </div> */}
    
           </div>
            </div>
            </div>
            <SectionTwo/>
    </div>
  )
}
