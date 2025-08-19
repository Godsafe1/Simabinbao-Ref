import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitch, FaYoutube } from 'react-icons/fa'
import { BiAccessibility } from "react-icons/bi";

function Footer() {
  return (
    <div className='bg-[#f1e4ce] py-20'> 
        <div className='container mx-auto max-w-[1320px] px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
               <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                    <a href="#" className="block w-full max-w-[300px] mb-6">
                         <img className='rounded-xl w-full h-auto object-contain' src="/LOGO-SIAMDINBAO-FOOTER.png" alt="Project " />
                        </a>
                    <p className='my-10 text-neutral-700 mb-6'>Lorem ipsum dolor sit.</p>
                    <ul className='flex md:flex-row gap-4'>
                        <li className='mr-[1rem]'><a className='text-neutral-700 text-[1.5rem]' href="https://www.instagram.com/kanhawellnessclinic"target="_blank"><FaInstagram /></a></li>
                        <li className='mr-[1rem]'><a className='text-neutral-700 text-[1.5rem]' href="https://www.facebook.com/Kanhawellnessclinic"target="_blank"><FaDribbble /></a></li>
                        <li className='mr-[1rem]'><a className='text-neutral-700 text-[1.5rem]' href="#"    target="_blank"><FaTwitch /></a></li>
                        <li className='mr-[1rem]'><a className='text-neutral-700 text-[1.5rem]' href="#"><FaYoutube /></a></li>
                    </ul>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <h4 className='text-[1.25rem] text-neutral-700 font-semibold'>
                            lorem
                        </h4>
                        <ul className='flex flex-col mb-5'>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-[1.25rem] text-neutral-700 font-semibold' >
                            lorem2
                        </h4>
                        <ul>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-neutral-700 text-[0.875rem]' href="#">About us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>text1</h4>
                        <form action="" className='flex mt-5'>
                        <div className='relative'>
                            <input type="text" className='bg-white/50 text-neutral-700 text-[0.875rem] px-4 py-2 rounded-md' placeholder='Your email address' />
                            <button className='absolute top-[10px] right-[10px] cursor-pointer' type='submit'><FaRegPaperPlane className='text-neutral-700'/> </button>
                        </div>
                        </form>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer