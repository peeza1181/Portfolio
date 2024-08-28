import React from 'react'

export const Contact = () => {
  return (
    <div 
    name="contact"
    className='w-full h-screen bg-white text-black flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
          <p className='py-4'>// Submit the form below or shoot me an email - piyarat.napat@gmail.com</p>
        </div>
        <input className='bg-pink-100 p-2 ' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-pink-100' type="email" placeholder='Email' name='email' />
        <textarea className='bg-pink-100 p-2' name="message" rows='10' placeholder='Message' ></textarea>
        <button className='mt-5 mx-auto p-3 rounded-[10px] border-2 border-black hover:bg-black hover:text-white duration-700'>Send Message</button>
      </form>
    </div>
  )
}
