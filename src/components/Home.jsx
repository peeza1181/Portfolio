import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffff]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#000000]'>
            <p className='text-1xl sm:text-2xl'>Hi, My name is </p>
            <h1 className='sm:text-7xl text-5xl font-bold'>Piyarat Napatpongwalee</h1>
            <p className='text-1xl sm:text-2xl pt-4'>I want to a Developer, and at the moment i'm learning about Frontend.</p>
            <div className='py-3'>
                <button className='rounded-[10px] border-2 border-black px-3 my-2 flex items-center hover:bg-black hover:text-white duration-700'>
                    View Work 
                    <span className=''>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}
