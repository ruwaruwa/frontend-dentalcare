import React from 'react'
import logo from '../../assets/image.png'
import clock from '../../assets/clock.png'
import loction from '../../assets/map.png'
export default function TopHeader() {
  return (
    <div>
                    {/* --start here-- */}
            <div className='border-2'>
                <div className='flex justify-between px-8 py-3'>
                <div>
      <img src={" "} className='w-[50%] ml-8 h- mt-2 [100%]'/>
    </div>
                <div>
      <img src={logo} className='w-[50%] ml-8 h- mt-2 [100%]'/>
    </div>
                    <div className='flex px-10 gap-10'>
                        <div className='flex'>
                          <p className='w-14 h-20'>
                             <img src={clock} className='w-[] h-[100' />
                            </p>
                            <div className='mr- [30px] mt-2'> <h1>8 am to 6 pm (Sat - Fri)<br/>
                              10 am to 8 pm (Sat - fri)</h1>
                
                            </div>
                        </div>
                        <div className='flex'>
                          <p className='w-12 h- 20'>
                             <img src={loction} className='w-[] h-[' />
                            </p>
                            <div className=''> <h1>8 am to 6 pm (Sat - Fri)<br/>
                              10 am to 8 pm (Sat - fri)</h1>
                
                            </div>
                        </div>
                        <div className='bg-den py-1 px-8  items-center'>
                          <button className='bg text-2xl mt-3 text-white ml-4'>apointment</button>
                        </div>
                       
                    </div>
                </div>
            </div>
    </div>
  )
}
