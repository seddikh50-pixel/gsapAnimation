"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Black_Ops_One } from 'next/font/google';
import Link from 'next/link';
import { useNavContext } from '../context/NavContext';

const BlackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const [isOpen, setIsOpen] = useNavContext()


  const blackLeft = useRef()
  const yellowLeft = useRef()
  const [color, setColor] = useState("[#f3e600]");

  return (
    <div className='fixed top-0 left-0 z-10 w-screen flex justify-between  '>
      <Link href={"/"} className={BlackOpsOne.className + " text-[#f3e600] text-6xl font-bold p-1 text-border"}>
        SED40
      </Link>
      <div onClick={()=> setIsOpen(true)} onMouseEnter={() => {
        yellowLeft.current.style.height = '100%'
        setColor('black')
      }}
        onMouseLeave={() => {
          yellowLeft.current.style.height = '0'
          setColor('[#f3e600]')
        }}
        ref={blackLeft} className='w-75 h-13 bg-black text-white relative '>
        <div  className=' w-20 h-5 absolute right-10   top-4 flex flex-col justify-center items-end gap-1 z-1 '>
          <div className={`w-13 h-[2px] bg-${color}`}></div>
          <div className={`w-8 h-[2px] bg-${color}`}></div>
        </div>
        <div ref={yellowLeft} className='w-full h-0 transition-all bg-[#f3e600] absolute top-0 left-0'></div>
      </div>
    </div>
  )
}

export default Navbar