import React from 'react'
import { NavLink } from 'react-router-dom'

function Headeritem({Id,Name,Icon,Ref}) {
    

  return (
    <div className='flex items-center gap-6  hover:text-orange-200' key={Id}>
        <NavLink
        to={Ref}
        className={`flex justify-center gap-3 text-slate-700 hover:text-purple-800`}
        >
          <Icon className="mt-1 text-[17px]"/>
          {Name}
        </NavLink>
    </div>
  )
}

export default Headeritem