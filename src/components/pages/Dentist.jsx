import React from 'react'
import './den.css'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import TopHeader from '../header/TopHeader'
import d1 from '../../assets/1.png'

import d2 from '../../assets/2.png'
import d3 from '../../assets/3.png'
import d4 from '../../assets/4.png'

import d5 from '../../assets/5.png'

import d6 from '../../assets/doctor.jpg'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import Footer from '../systemfooter/Footer'
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
                            <h2 className='text-center text-5xl font-serif text-white py-3' >
           
                 
                            
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
        {/* ..section two. */}
        <div>
          <div className='grid sm:grid-cols-4 grid-cols-1 sm:ml-[10%]'>
{/* <div className="shadow-md shadow-[#c9cdd1] gap-2 box-border w-[450px] h-[400px] px-9 sm:ml-[15%] mt-10 ml-8">
<img className = 'img-responsive w  w-[500px] border bg-slate-300' src={d1}/>
</div> */}

<div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d1}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.mohamed</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Genaral</span>
                        <span>denstist</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>


               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d2}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Hafsa</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Orthodontist
</span>
                        {/* <span>denstist</span> */}
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>



               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d3}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Thumis</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Dental 
</span>
                        <span>Sergeon</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>


               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d4}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Thumis</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Dental 
</span>
                        <span>Sergeon</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>
          </div>

          <div className='grid sm:grid-cols-4 grid-cols-1 sm:ml-[10%]'>
{/* <div className="shadow-md shadow-[#c9cdd1] gap-2 box-border w-[450px] h-[400px] px-9 sm:ml-[15%] mt-10 ml-8">
<img className = 'img-responsive w  w-[500px] border bg-slate-300' src={d1}/>
</div> */}

<div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d1}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.mohamed</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Genaral</span>
                        <span>denstist</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>


               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d2}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Hafsa</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Orthodontist
</span>
                        {/* <span>denstist</span> */}
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>



               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d5}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Thumis</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Dental 
</span>
                        <span>Sergeon</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>


               <div className='bg-white shadow-md rounded h-[500px] w-[400px] py-2 border-2 mt-10 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:ml-0 ml-[16%]'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[210px] px-2 py-2 w-[380px]'>
                        <img className='h-[200px] w-full px-2 py-2 ' src={d4}/>
                     </div>
                     <div className='mt-3 ml-6'>

                        {/* <FaMapMarkerAlt/> */}

                       
                        <span className='text-blue font-bold'>Dr.Thumis</span><br></br>
                        <div className='flex gap-1 text-den hover:text-blue'>
                        <span className='text text-xl'>Dental 
</span>
                        <span>Sergeon</span>
                        </div>

                     </div>
                     <div className='sm:ml-20 ml-10'>
                      {/* <h1 className='text- font-black'>flow on</h1> */}
                    
                     <div className='mt-2 border-t p-2 flex justify-between items-center'>
            
                        <div className='flex gap-2 text-center'>
                           <FaTwitter className='mt-1 text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                        <div className='flex gap-3'>
                           <FaTwitter className='mt-1  text-blue text-2xl hover:text-den' />
                           {/* <span>100k flowers</span> */}
                        </div>
                     </div>
                     </div>
             <div className='bord er-2 shadow-2xl mt-2 bg- black w-[300px]'>
          <div className='flex justify-around'>
    <div className='flex gap-2'>
    <h1><i class="fa-solid fa-heart  text-blue text-2xl hover:text-den "></i></h1>
    <p>10.6k</p>
    </div>
    <div className='flex gap-3'>
 <h1><i class="fa-sharp fa-regular fa-clock  text-blue text-2xl hover:text-den"></i></h1>
 <p>09 am - 12 pm</p>
         </div>

          </div>
             </div>
                  </div>
                  {/* <ridsgd */}

               </div>
          </div>


{/* ..........section three...... */}
<div className='border p-4 mt-5'>
  <div className=' sm:flex justify-evenly '>
<div className='sm:ml-0 ml-20'>
 <div>
  <h1 className='p-4 font-serif text-2xl text-den mt-3 '>PARTNERS</h1>
 </div>
 <h1 className='font-black text-3xl text-den px-2'>Our Partners
<span className='text-blue'><br/>love to work</span>
</h1>
<div className='text-gray-500 px-2 p-1'>
  <p>
    Dental care is the maintenance of healthy teeth<br/> and the practice
     of keeping the mouth and teeth<br/> clean pur sue pleasure
      rationally encounter consequence
  </p>

</div>
<button className='text-den hover:text-blue underline px-2 mt-2 p-1'>Read more</button>
</div>

<div className='border-2 w-[500px] mt-4 p-2 sm:ml-0 ml-12'>
  <img  src={d6}/>
</div>
  </div>
</div>

    
        </div>
        {/* ...foter */}
        <Footer/>
    </div>
  )
}
