import React, { useEffect, useState } from 'react'
import hbird from '../../../assets/hummingbird.jpg'
import kbird from '../../../assets/Kestrel.jpg'
import fbird from '../../../assets/Flamingo.jpg'
import tbird from '../../../assets/Toucan.jpg'

function Main() {
  const [birdNameColor, setBirdNameColor] = useState(hbird)

  return (
    <div className='w-full bg-slate-200 p-11 flex justify-center items-center'>
          <div className='h-[400px] w-[85%] flex flex-row  hover:shadow-slate-900 rounded-2xl'>
            <div className='w-[50%] flex justify-center items-center ml-5'>
              <img className='h-[350px] rounded-2xl' src={birdNameColor} alt="imgpro" />
            </div>
            <div className='w-[50%] flex flex-col justify-center items-center'>
              <h1 className='m-4 border-4 border-blue-700 p-3 w-[400px] text-center text-2xl font-semibold rounded-2xl cursor-pointer ' key='Hummingbird' id='Hummingbird'onClick={(e) => {
                setBirdNameColor(hbird)
              }}>Hummingbird</h1>
              <h1 className='m-4 border-4 border-blue-700 p-3 w-[400px] text-center text-2xl font-semibold rounded-2xl cursor-pointer ' key='Flamingo' id='Flamingo' onClick={(e) => {
                setBirdNameColor(fbird)
              }}>Flamingo</h1>
              <h1 className='m-4 border-4 border-blue-700 p-3 w-[400px] text-center text-2xl font-semibold rounded-2xl cursor-pointer ' key='Toucan' id='Toucan' onClick={(e) => {
                setBirdNameColor(tbird)
              }}>Toucan</h1>
              <h1 className='m-4 border-4 border-blue-700 p-3 w-[400px] text-center text-2xl font-semibold rounded-2xl cursor-pointer ' key='Kestrel' id='Kestrel' onClick={(e) => {
                setBirdNameColor(kbird)
              }}>Kestrel</h1>
            </div>
          </div>
    </div>
  )
}

export default Main