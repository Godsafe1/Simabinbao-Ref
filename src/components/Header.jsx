import React from 'react'

function Header() {
  return (
    <div className='bg-white py-10 px-6 md:px-20'>
        <div className='max-w-[1320px] mx-auto'>

            <div>
                <p className="text-sm text-gray-500 uppercase mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1B2A4E]">
                Siam  
                 <span className="text-[#5C3A21] px-2">Dinbao</span>
                    </h1>
                <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#1B2A4E]">
                    {["General Construction Services", "Concrete Work", "Design and Planning", "Civil Works", "Pre-Construction"].map((item, index) => (
                    <span key={index} className="bg-[#F1F5F9] px-4 py-1 rounded-full">{item}</span>
                    ))}
                    <p className="text-gray-500 text-sm mt-5 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                
                <div className="relative">
                <img
                    src="/Header2.png"
                    alt="Term"
                    className="rounded-xl w-full object-cover"
                 />
                <div className="absolute top-5 right-5 space-y-2">
                    <div className="bg-white p-6 rounded-xl text-ston- px-5 py-3 shadow-md text-center">
                    <p className="text-2xl text-[#5C3A21] font-bold">640+</p>
                    <p className="text-sm">Projects Completed</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl text-ston- px-5 py-3 shadow-md text-center">
                    <p className="text-2xl text-[#5C3A21] font-bold">25+</p>
                    <p className="text-sm">Years of Experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl text-ston- px-5 py-3 shadow-md text-center">
                    <p className="text-2xl text-[#5C3A21] font-bold">450+</p>
                    <p className="text-sm">Happy Customers</p>
                    </div>
                </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Header