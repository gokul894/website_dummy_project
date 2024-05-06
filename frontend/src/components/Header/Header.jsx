import React from 'react'
import Headeritem from './HeaderItem.jsx';
import { HiHome,HiLightBulb } from "react-icons/hi2";
import { MdOutlineTravelExplore,MdOutlineContactMail } from "react-icons/md";
import { Link} from 'react-router-dom';

function Header() {
  const items = [
    {
        id:1,
        name:"HOME",
        icon: HiHome,
        ref:""
    },
    {
        id:2,
        name:"EXPLORE",
        icon:MdOutlineTravelExplore,
        ref:"explore"
    },
    {
        id:3,
        name:"ABOUT",
        icon:HiLightBulb,
        ref:"about"
    },
    {
        id:4,
        name:"CONTACT",
        icon:MdOutlineContactMail,
        ref:"contact"
    }
]

  return (
    <div className='fixed h-auto min-w-full bg-slate-200 p-2 font-bold flex justify-between top-0 pl-4 pr-4 z-10 backdrop-blur-2xl bg-opacity-[.3]'>
        <div><span className='text-2xl text-slate-700'>WEL</span><span className='text-2xl text-purple-700'>COME</span></div>
        <div className='flex gap-8'>
          {items.map(item => (
            <Headeritem Id={item.id} Name={item.name} Icon={item.icon} Ref={item.ref}/>
          ))}
        </div>
        <Link 
        to="/"
        className='text-2xl text-white bg-purple-800 p-2 rounded-2xl'
        >SignUp/SignIn</Link>
    </div>
  )
}

export default Header