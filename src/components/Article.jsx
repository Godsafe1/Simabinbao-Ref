import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function Article() {
  return (

    <div className='pt-10 pb-32 text-center bg-white'> 
        <div className='container mx-auto max-w-[1320px] px-4'> 
            <h3 className='text-3xl font-semibold text-[#8B6B4A] mb-2'>ไดอะตอมไมต์.</h3>
            <p className='text-[#a07b56] mb-8'>
                Lorem ipsum dolor sit amet.
            </p>

            <div className='my-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Card 1 */}
                    <div className='relative group'>
                        <div className='aspect-[4/3] overflow-hidden rounded-xl shadow-md'>
                            <img 
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                                src="/Article4.png" 
                                alt="Project" 
                            />
                        </div>
                        <div className='absolute bg-white bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[350px] p-6 shadow-lg rounded-xl transition-all duration-300 group-hover:shadow-xl'>
                            <p className='font-bold text-lg text-[#717171] mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <a className='flex justify-center items-center text-[#8B6B4A] font-bold hover:text-[#6e5134] transition-colors' href="#">
                                Read more <HiOutlineArrowNarrowRight className='ml-2 transition-transform group-hover:translate-x-1'/> 
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='relative group'>
                        <div className='aspect-[4/3] overflow-hidden rounded-xl shadow-md'>
                            <img 
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                                src="/Article2.png" 
                                alt="Project" 
                            />
                        </div>
                        <div className='absolute bg-white bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[350px] p-6 shadow-lg rounded-xl transition-all duration-300 group-hover:shadow-xl'>
                            <p className='font-bold text-lg text-[#717171] mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <a className='flex justify-center items-center text-[#8B6B4A] font-bold hover:text-[#6e5134] transition-colors' href="#">
                                Read more <HiOutlineArrowNarrowRight className='ml-2 transition-transform group-hover:translate-x-1'/> 
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='relative group'>
                        <div className='aspect-[4/3] overflow-hidden rounded-xl shadow-md'>
                            <img 
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                                src="/Article3.png" 
                                alt="Project" 
                            />
                        </div>
                        <div className='absolute bg-white bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[350px] p-6 shadow-lg rounded-xl transition-all duration-300 group-hover:shadow-xl'>
                            <p className='font-bold text-lg text-[#717171] mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <a className='flex justify-center items-center text-[#8B6B4A] font-bold hover:text-[#6e5134] transition-colors' href="#">
                                Read more <HiOutlineArrowNarrowRight className='ml-2 transition-transform group-hover:translate-x-1'/> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article