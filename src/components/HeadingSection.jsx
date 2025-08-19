import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from "react-icons/bs";
import { FaRegCircle } from 'react-icons/fa';

function HeadingSection() {
  return (
 <section className="bg-white py-16">
      <div className="container mx-auto max-w-[1320px] px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm text-[#5C3A21] font-medium mb-2">— Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-[#5C3A21]">Crafting Excellence</span> in Every Project
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#5C3A21] text-[#F5F0E8] rounded-md hover:bg-[#8B6B4A] px-6 py-3  flex items-center gap-2 transition">
            Learn More <BsArrowRight />
          </button>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Box: Image + Experience */}
          <div className="relative">
            <img
              src="Article1.png"
              alt="Project"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#c2874b] text-white px-4 py-2 rounded shadow-lg text-sm font-bold">
              25+ Years of Experience
            </div>
          </div>

          {/* Right Box: Mission */}
          <div className="	bg-[#5C3A21] text-white p-6 rounded-lg relative flex flex-col justify-between">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                <div className="flex justify-between items-end mt-4">
                <span className="font-semibold">Our Mission</span>
                <div className="flex gap-2">  
                    <button className="text-[#DCC8B4] hover:text-orange-200 transition">
                    <BsArrowLeft size={20} />
                    </button>
                    <button className="text-[#DCC8B4] hover:text-orange-200 transition">
                    <BsArrowRight size={20} />
                    </button>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeadingSection