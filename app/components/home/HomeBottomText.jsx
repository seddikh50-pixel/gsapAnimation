import Link from 'next/link'
import React from 'react'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
      <Link className='text-[12vh] pt-2 leading-[1.2] hover:text-yellow-400 hover:border-yellow-400 border-3 rounded-full px-5 font-[font2] text-white' href={"/projects"}>PROJECTS</Link>
      <Link className='text-[12vh] pt-2 transition-all duration-500 leading-[1.2] hover:text-yellow-400 hover:border-yellow-400 border-3 rounded-full px-5 font-[font2] text-white' href={"/agence"}>AGENCE</Link>
    </div>
  )
}

export default HomeBottomText