"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
import { AnimatePresence, motion } from "framer-motion";
import Egg from '../components/Egg';



gsap.registerPlugin(ScrollTrigger, SplitText);
const page = () => {
    const [show, setShow] = useState(true);
  


  const imageDevRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const [index, setIndex] = useState(0);
  const images = [
    "/images/johnny1.jpg",
    "/images/johnny2.jpg",
    "/images/johnny3.jpg",
    "/images/johnny4.jpg"
  ]
  useGSAP(() => {
    let split = SplitText.create(textRef.current, {
      type: "chars, lines",
      mask: "chars",
      linesClass: "line++",


    });


    gsap.from(split.chars, {
      y: - 200,
      scale: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 1,
      ease: "power1"
    })







    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        scrub: true,
        pin: true,
        start: "top 20.9%",
        end: "top -67.6%",
        onUpdate: (self) => { setIndex(Math.floor(self.progress * (images.length - 1))) }
      }
    })





  });
  return (
    <div className=''>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black z-10"
            onAnimationComplete={() => setShow(false)}
          />
        )}
      </AnimatePresence>

      <div className='section1 bg-[#f3e600] '>
        <div ref={imageDevRef} className='imageContainer absolute h-50 w-30 xl:h-90 xl:w-70 rounded-3xl top-48 overflow-hidden  left-1/3 z-0'>
          <Image ref={imageRef} src={images[index]} className='img1 object-cover' alt='' fill />
        </div>
        <div className='font-[font2] z-1  relative'>
          <div>
            <h1 ref={textRef} className='text-black text-center font-[font2] lg:text-[28vh] xl:text-[32vh] text-[10vh] sm:text-[18 vh] md:text-[25vh]  pt-[50vh] leading-[0.9] uppercase'>
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className='pl-[40%]  mt-10'>
            <p className='text-black xl:text-5xl text-xl md:text-4xl sm:text-3xl lg:text-4xl font-[font2]  '>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.
              A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We bring that perspective to every brand
              story we help tell.

            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen w-sreen bg-red-500">


      </div>
    </div>

  )
}

export default page