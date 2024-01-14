import React, { useState } from 'react'
import hrlogo from '../img/logo/hrlogo.png'
import { MenuOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'


const Nav = () => {

    let Links = [
      {name:"For talents",link:"/"},
      {name:"For company",link:"/"},
      {name:"Features",link:"/"},
      {name:"Partnerships",link:"/"},
      {name:"Pricing",link:"/"},
    ];
    const [Open, setOpen] = useState(false);    

  return (
    <div className='fixed z-50 shadow-lg w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-sans text-gray-800'>
        <span className='text-3xl mr-1 pt-2'>
        <img src={hrlogo} alt=''/>
        </span>
      </div>
      
      <div onClick={()=>setOpen(!Open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    {
        Open ? <CloseOutline
        color={'#00000'} 
        height="50px"
        width="50px"/> :
      <MenuOutline
        color={'#00000'} 
        height="50px"
        width="50px"
      />
    }
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 md:text-3xl absolute md:sticky bg-white left-0 w-full md:w-auto md:ml-0 duration-500 ${Open ? 'top-20 ':'top-[-500px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-6 text-base md:my-0 my-7 font-sans'>
              <a href={link.link} className='font-sans font-normal text-lg ml-8 hover:text-blue duration-500'>{link.name}</a>
            </li>
          ))
        }
       <button className={`max-lg:text-xs max-lg:h-[2rem] text-white ml-8 hover:bg-black duration-300 font-sans font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue`}>Job post</button>
      </ul>
      </div>
    </div>
  )
}

export default Nav