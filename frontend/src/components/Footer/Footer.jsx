import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='h-[250px] min-w-full border-t-2 border-slate-700 flex flex-row justify-around p-4 bg-slate-200'>
      <div>
        <h1 className='text-slate-800 font-semibold'>Copy Right 2024: All rights reserved !</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-bold text-slate-800'>Section</h1>
        <Link
          to="/"
          className="text-slate-900"
        >Home</Link>
        <Link to="/about" className='text-slate-900'>About</Link>
        <Link to="/contact" className='text-slate-900'>Contact</Link>
        <Link to="/explore" className='text-slate-900'>Explore</Link>
      </div>
      <div>
        <h1 className='text-xl font-bold text-slate-800'>Author:</h1>
        <p className=' font-serif text-xl mt-4'>Gokul Kumar</p>
      </div>
    </div>
  )
}

export default Footer