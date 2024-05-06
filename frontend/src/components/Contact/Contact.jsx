import React from 'react'
import contactimg from '../../assets/contactimg.jpg'

function Contact() {
  return (
    <div className='w-full h-auto mt-[100px] flex justify-center items-center'>
      <div className='w-[80%] bg-slate-200 my-[50px] mb-[50px] p-4 flex flex-row justify-center items-center gap-8 rounded-2xl'>
        <img src={contactimg} alt="image" className='h-[350px] rounded-xl' />
        <div className='p-3 flex flex-col w-[40%] justify-center items-center gap-4'>
          <input type="text" placeholder='USERNAME' className='p-2 border-2 border-slate-700 outline-none text-center text-2xl rounded-xl'/>
          <input type="text" placeholder='TITLE' className='p-2 border-2 border-slate-700 outline-none text-center text-2xl rounded-xl'/>
          <input type="text" placeholder='DESCREPTION' className='p-2 border-2 border-slate-700 outline-none text-center text-2xl rounded-xl'/>
          <h1 className='text-2xl font-bold'>WHAT'S IN YOUR MIND</h1>
          <textarea name="textarea" className='p-2 border-2 border-slate-700 h-[100px] outline-none text-2xl rounded-xl'></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact