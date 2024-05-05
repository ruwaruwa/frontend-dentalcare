import React from 'react'
import log from '../../assets/ww-02.png'
import Foo from './Foo'
export default function Footer() {
  return (
    <div>
        <div className='bg-den py-10 p-10 mt-8 shadow-md shadow-blue'>
            <div className='fl ex j'>

<div className='flex justify-center'>
<div className="text-white text-xl">
<h1 className='text-white text-3xl'>Newsleter</h1>
    <h1 className='mt-6 text-4xl font-sans'>Subscribe our<br></br>Newsletter</h1>
</div>
<div className="borde r -2 flex h-16 p-8 items-center mt-14">
    <input type="text" placeholder='Enter your email' className='border-2 border-den rounded-full w- full h-14 p-2 px-10 outline-none cursor-pointer background  '></input>
<button className='bg-blue text-white text-2xl px-4 py-2 mr-5 left-20 rounded-full'>Subscribe</button>
</div>
</div>
        </div>
            </div>
            {/* <hr></hr> */}
            <div className='items-center py- 4 p-10 mt  bg-blue slate-500'>
              <div>
                <div className='grid grid-cols-4 px- 20'>
<div className='ml-20'>
{/* <div> */}
  <img  src={log} className='w-[50%] h-[140px] p-0 mt-0'/>
{/* </div> */}
<p className='text-white text-1xl font-serif'>Dental care is maintenance of healthy<br/> teeth and cleaning mouth for beautiful smile</p>
<div className='gap-4'>
<i class="fa-brands fa-facebook-f border-current rounded-s-sm text-den text-2xl"></i>
<i class="fa-brands fa-instagram ml-4 text-den text-2xl"></i>
<i class="fa-brands fa-twitter ml-4 text-den text-2xl"></i>
</div>
</div>

<div className='ml-20 text-white'>
  <h1 className='text-white text-4xl font-serif p-'>Our Services</h1>
  <div className="p-2">
  <p className='text-white text- 1xl p-1 font-sans'>General Dentistry</p>
  <p className='p-1'>Oral Surgery</p>
  <p className='p-1'>Dental Bridge</p>
  <p className='p-1'>Root Canals</p>
  <p className='p-1'>Cosmetic Braces</p>
  <p className='p-1'>Pediatric Dentistry</p>
  </div>
  
</div>

<div>
  <h1 className='text-white text-4xl font-serif p-' id='timeline100500'>Importance</h1>
<div className="p-2 text-white">
<p className='text-white text-xl font-sans'>Abut us</p>
  <p  className='p-1'>Comapay</p>
  <p className='p-1'>Terms & Conditions</p>
  <p className='p-1'>24/7 Advance Care</p>
  <p className='p-1'>Emergency Centre</p>
  <p className='p-1'>Payment System</p>
  <p className='p-1'>Privacy Policy</p>
</div>
</div>

<div>
  <h1 className='text-white text-4xl font-serif p-'>Contact us</h1>
 <div className="p-2 text-white">
 <p className='text-white text- xl font-sans p-2'>Muqdisho-somalia</p>
  <p className='text-white text -2xl font-sans p-2'>maka-almukaram</p>
  <p className='text-white text- 2xl font-san p-2s p-2'>+252616487207</p>
  <p className='text-white text- 2xl font-sans p-2'>+252616487207</p>
<p>info@example.com<br/>
www.predent.com</p>
 </div>
</div>
                </div>
              </div>
            </div>
            <h1 className='text-center bg-black text-white p-2'>Copy-Right <span className='text- text-1xl'> By ruwa</span></h1>
            {/* <Foo/> */}
    </div>
  )
}
