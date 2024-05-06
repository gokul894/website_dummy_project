import React from 'react'
import herologo from '../../assets/imagelogo.png'
import Main from './Main/Main.jsx'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <>
      <div className=' bg-slate-200 h-[400px] min-w-full flex items-center justify-center'>
        <div className='relative flex flex-col translate-y-[30px] translate-x-[-150px] -z-8'>
          <h1 className='text-3xl font-semibold text-slate-800'>WELCOME TO NEW WORLD</h1>
          <div className='h-auto w-[300px] mt-2 mb-10'>
            <p className='text-slate-700 font-serif'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab quae aut eaque porro molestiasperspiciatis!</p>
          </div>
          <Link className='bg-amber-400 w-[200px] hover:scale-[1.2] hover:shadow-xl p-3 text-center text-2xl font-bold rounded-xl hover:text-slate-700' to='explore'>
          MORE
          </Link>
        </div>
        <div className=' translate-y-9'>
        <div className=' animate-spin-slow'>
        <img src={herologo} className='relative h-[300px] w-[300px]'/>
        </div>
        </div>
      </div>
      <Main/>
    </>
  )
}

export default HeroSection