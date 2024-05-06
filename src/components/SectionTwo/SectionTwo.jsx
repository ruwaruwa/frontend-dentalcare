import React from 'react'
import line from '../../assets/dotted-barline.png'
import nin from '../../assets/ni.png'
import saw from '../../assets/img-01.jpg'
import SectionThre from './SectionThre'
export default function SectionTwo() {
  return (
    <div>
        <div className='bg -den border- 2'>
<div>
    <div className='grid grid-cols-2 sm:grid-cols-3  items-center px-10'>
<div className='animate-pulse'>
    <div className='borde r w-[250px] h- [100px] p-2 shadow-md shadow-[#eeeff0] hover:scale-110 duration-500 gap-2 box-border'>
        <div className='flex'>
            <h1><i class="fa-solid fa-tooth font-bold text-4xl text-den"></i></h1>
         <div className='px-2'>
         <h1 className='text-3xl font-bold text-blue'>$30</h1>
         <h1>Dental Crown</h1>
         </div>
       <div className='ml-4'>
       <p><img src={line} className='w-10 h-35'/></p>
       </div>
        </div>
    </div>
</div>

<div className='animate-bounce'>
    <div className='w-[250px] h- [100px] p-2 shadow-md shadow-[#eeeff0] hover:scale-110 duration-500 gap-2 box-border'>
        <div className='flex '>
            <h1><i class="fa-sharp fa-solid fa-tooth font-bold text-den text-5xl "></i></h1>
         <div className='px-2'>
         <h1 className='px-2 text-3xl font-bold text-blue'>$60</h1>
         <h1>Dental Implant</h1>
         </div>
       <div className='ml-4'>
       <p><img src={line} className='w-10 h-35 mt-2'/></p>
       </div>
        </div>
    </div>
</div>

<div className='animate-bounce'>
    <div className='w-[250px] h- [100px] p-2 shadow-md shadow-[#eeeff0] hover:scale-110 duration-500 gap-2 box-border'>
        <div className='flex'>
            <h1><i class="fa-solid fa-teeth text-5xl font-bold text-den"></i> </h1>
         <div className='px-2'>
         <h1 className='text-3xl font-bold text-blue'>$45</h1>
         <h1>Teets Whitening</h1>
         </div>
       <div className='ml-4'>
       <p><img src={line} className='w-10 h-35'/></p>
       </div>
        </div>
    </div>
</div>
    </div>
</div>
        </div>
        {/* <--section 2 part twoo -> */}

        <div>
            <div className='border mt-4'>
<div className='bg -den grid sm:grid-cols-2 justify- center '>
<div className='animate-pulse'>
    <div className='grid gr id -cols-2 sm:grid- cols-3  items-center px-10 '>
        <img src={nin} className='w-[350px] h -[350px]  sm: block sm:ml-[40%] ml-20'/>
  
    </div>
</div>
<div>
    <div className='grid 3 items-center px-10'>
        <div>
        <h1 className='mt-10 text-den font-sans px-4 text-2xl p-2'>SCIENCE 2005</h1>
      <h1 className='text- center p-2'>
      Keep your Teeth Clean & Shine
      </h1>
      <p className='text -center p-2'>
      Dental care is the maintenance of healthy teeth <br/>and the practice of keeping
       the mouth and teeth clean pur sue pleasure rationally <br/>
      encounter consequences that are extremely painful. Nor again is there anyone
      </p>
      <br/>
      <h2 className='text-blue text-2xl font-bold'>You need to brush your teeth everyday for healty<br/>
       teeth and simle</h2>
       {/* <br/><br/> */}
       <div className='flex  gap-6'>
       <button className='mt-4 bg- den underline text-den text-2xl px-6 py-2 rounded-lg hover:text-blue hover:underline'>Book now</button>
      <div className='flex'>
      <i class="fa-solid fa-circle-play mt-6 text-den font-bold text-3xl"></i>
       <button className='mt-4 bg- den text-den px-3 py-2 text-2xl rounded-lg hover:text-blue hover:underline'>Book now</button>
      </div>
       </div>
        </div>
    </div>
</div>
</div>
            </div>
        </div>
{/*     section three------------ */}
<div>
    <div className='bo mt- 2'>
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
<SectionThre/>
    </div>
  )
}
