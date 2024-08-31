import React from 'react'
import { HiArrowNarrowDown  } from 'react-icons/hi'
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffff]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#000000]'>
            <p className='text-1xl sm:text-2xl'>Hi, My name is </p>
            <h1 className='sm:text-7xl text-5xl font-bold'>Piyarat Napatpongwalee</h1>
            <p className='text-1xl sm:text-2xl pt-4'>Thank you for visiting my portfolio. Click About to learn more about me.</p>
            <div className='py-3'>
                <button className='flex items-center px-3 my-2 rounded-[10px] border-2 border-black hover:bg-black hover:text-white duration-700'>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                        <span className=''>
                            <HiArrowNarrowDown  className='ml-3'/>
                        </span>                  
                </button>
            </div>
        </div>

    </div>
  )
}
