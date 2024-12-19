import React from 'react'
import { SectionWrapper } from '../hoc'
import { Html } from '@react-three/drei'

import { Link } from 'react-router-dom';

import { love2, logo } from '../assets';

const getyear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-full
    text-white text-[14px] font-light">Copyright &copy; {getyear}
      
      <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {}}
        >
        <img src={logo} alt="love" className='w-12 h-12 object-contain' />
      </Link>

      <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {}}
        >
        <img src={love2} alt="love" className='w-14 h-14 object-contain' />
      </Link>
    </div>
  )
}

export default SectionWrapper(Footer, "")