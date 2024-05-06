import React from 'react'
import './about.css'
import { Form, Link } from 'react-router-dom'
import TopHeader from '../header/TopHeader'
import c from  '../../assets/c-01.jpg'
import './cont.css'
import Footer from '../systemfooter/Footer'
export default function Contact() {
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
        <div id='ab' className=''>
<div className='flex justify-center'>
<h1 className='text-4xl font-black mt-24 text-white'>Contact Us</h1>
</div>
        </div>
        {/* <--section two-> */}
        <div className='border flex justify-evenly p-10'>
<div className='w-[500px] border-2 p-5'>
    <div className='px-2 p-4 mt-2'>
        <h1 className='text-2xl font-mono text-blue'>CONTACT US</h1>
        <div>
            <h1 className='text-4xl text-blue font-black'>Our <span className='text-den'>Contact</span> Information</h1>
        </div>
    </div>
    <p>
    Feel free to contact us any time. We will get<br></br>
back to you as soon as we can!
    </p>
    <form>
<div>
    <input type='text' placeholder='Enter your Name' className='w-full border-2 underline-none p-3 rounded-md outline-none cursor-pointer'/><br/>
    <input type='text' placeholder='Enter your email adress' className='w-full border-2 outline-none cursor-pointer p-3 rounded-md'/><br/>
    <input type='text' placeholder='Enter your Phone' className='w-full border-2 underline-none p-3 rounded-md outline-none cursor-pointer'/><br/>
    <textarea placeholder='Content' className='p-8 w-full py-10 outline-none cursor-pointer border-2'/>
</div>
     <div className="text-center">

<button className='bg-den text-2xl text-white p-2 w-[100px] rounded-lg text-center'>Send</button>

     </div>
     </form>
</div>
<div id='cc' className='border-4 bg- slate-600 border-white '>
  <div className='text-center p-2 mt-6 text-4xl text-white mt-10'>
    <h1>Address:</h1>
    {/* <br/> */}
    <h3 className='text-2xl mt-2'>Muqdishu-somalia<br/>maka-almukaram</h3>
    <h1>Phone:</h1>
    <h3 className='text-2xl mt-2'>+252616487207</h3>{" "}
    <h1>Email:</h1>
    <h3 className='text-2xl mt-2'>info@example.com</h3>{" "}
    <h1>Web:</h1>
    <h3 className='text-2xl mt-2'>www.Dentalcare.com</h3>
  </div>
</div>
        </div>
        <div>

        <div ><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=muqdishu-somalia+(DentalCare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
        </div>
<Footer/>
    </div>
  )
}
