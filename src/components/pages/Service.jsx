import React from 'react'
import HeaderOner from '../header/HeaderOner'
import TopHeader from '../header/TopHeader'
import { Link } from 'react-router-dom'
import  './ser.css'
import s from '../../assets/s2-01.jpg'
import { TypeAnimation } from 'react-type-animation'
import saw from '../../assets/img-01.jpg'
import Footer from '../systemfooter/Footer'
export default function Service() {
  return (
    <div>
        <div>
            <div>
                {/* <HeaderOner/> */}
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
                {/* ..secion one service start.. */}
                <div id='im'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-center text-3xl font-bold text-white py-4 mt-8'>Services</h1>
                            <h2 className='text-center text-5xl font-serif text-den py-3' >
           
                 
                            
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' What we Do  ?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' We make your Smile Beautiful ',
        1000,
        ' We make your Smile Beautiful   ',
        1000,
        ' We make your Smile Beautiful  ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                            </h2>
                            <Link to='/ ' className='text-white text-2xl hover:text-den'>home/service</Link>
                        </div>
        </div>
                </div>
                         {/* ..secion one service end.. */}


                         <div>
                        <div>
                            <div className='flex justify-evenly'>
                                <div className='flex flex-col items-center'>
                                    <img src={s} className='h-[600px]'/>
       </div>
       <div className='flex flex-col items-center'>
                                    <h1 className='text-center text-5xl font-bold text-den -white py-4 mt-8'>Services</h1>
                                    <p className='text-center text-5xl font-serif text- white py-3 text-blue' >
                                    BEST DENTAL CARE</p>
                             <h1 className='text-4xl text-blue mt-2'>We make your <br/> 
                             <span className='text-den'>
                               Smile Beautiful
                              </span>
                              </h1>
                              <h5 className='text-center p-2'>
                              Dental care is the maintenance of healthy teeth  and
                               the practice of keeping <br/> the mouth and 
                              teeth clean pur sue   pleasure rationally encounter <br/>
                              consequences that are extremely painful. <br/> 
                              Nor again is there anyone
                              </h5>

                              <h6 className='p-2 mt-2 text-blue font-black'>
                              You need to brush your teeth everyday for healty teeth and simle<br/>
                               so you need to brush your teeth regularly for better refrehment and ming.
                              </h6>
       </div>
       </div>
       <div className='items-center px- 10 p-0'>
            <div className='border-4 w-[500px]full h-[500px] [50%] bg-cover h- [500px] backgrp object-cover  relative bg-center'>
<img src={saw} className='w-full h-[500px] h- [300px] object-cover absolute mix-blend-overlay'/>
<div className='gird grid-cols-2 sm:flex justify-around items-center mt-24 px-10 py-3 m sm:gap-0 gap-4'>
    <div>
        <div className=''>
            <h1 className='text-blue text-3xl font-light text-center mt-10'> OUR SERVICES</h1>
            <h1 className='text-blue text-3xl font-bold text-center'>
            Better <span className='text-den font-semibold'>Services<br></br> for</span>your Teeth 
            </h1>
        </div>
    </div>
    <div className='flex mt-10'>
        <div className='w-2 h-32 bg-blue rounded'></div>
        <div className='bg-den h-[124px] w-[300px] rounded text-center'>
        <h1 className='mt-8 text-white text-3xl'>Please call us</h1>
            <h1 className='text-white text-c enter sm:mt- 10  text-2xl font-bold'>
              +252616487207
            </h1>
        </div>
    </div>
</div>
            </div>

        </div>
                        </div>
                         </div>
            </div>
        </div>
           {/* ....service */}
<div className='text-center p-4'>
<h1 className='text-blue text-4xl p-2 font-bold'>Our Service</h1>
<div className='grid sm:grid-cols-4 gap-3 mt-4 py-2 p-4 rounded-sm'> 
<div className='sm:ml-0 ml-14 border w-[400px] h-[300px]  box bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
<h1><i class="fa-solid fa-heart-pulse text-den text-5xl"></i></h1>
  <h1 className='font- bold text-2xl'>Our health mission</h1>
  <p>
  Our experienced dentists put your treatment needs first.
   We are proud to provide a high quality level of customer service,
   dental experience, and commitment to health and wellness
    to all our patients.<br/> Our goal is to make you feel better
  </p>
</div>
{/* <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <h1>icon</h1>
  <h1>Our health mission</h1>
  
  </div>
  </div> */}
  {/* <--2 */}
  <div className='sm:ml-0 ml-14 border w-[400px] h-[300px]  box bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
<h1><i class="fa-solid fa-tooth text-den text-5xl"></i></h1>

  <h1 className='font- bold text-2xl'>Our health mission</h1>
  <p>
  Our experienced dentists put your treatment needs first.
   We are proud to provide a high quality level of customer service,
   dental experience, and commitment to health and wellness
    to all our patients.<br/> Our goal is to make you feel better
  </p>
</div>


<div className='sm:ml-0 ml-14 border w-[400px] h-[300px]  box bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
<h1><i class="fa-solid fa-teeth-open text-den text-5xl"></i></h1>

  <h1 className='font- bold text-2xl'>Our health mission</h1>
  <p>
  Our experienced dentists put your treatment needs first.
   We are proud to provide a high quality level of customer service,
   dental experience, and commitment to health and wellness
    to all our patients.<br/> Our goal is to make you feel better
  </p>
</div>


<div className='sm:ml-0 ml-14 border w-[400px] h-[300px]  box bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
<h1><i class="fa-solid fa-dna text-den text-5xl"></i></h1>

  <h1 className='font- bold text-2xl'>Our health mission</h1>
  <p>
  Our experienced dentists put your treatment needs first.
   We are proud to provide a high quality level of customer service,
   dental experience, and commitment to health and wellness
    to all our patients.<br/> Our goal is to make you feel better
  </p>
</div>

</div>
</div>

        {/* ....footer */}
        <Footer/>
    </div>
  )
}
