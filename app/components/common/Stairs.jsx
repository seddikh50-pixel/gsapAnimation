"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { usePathname } from 'next/navigation';


gsap.registerPlugin(ScrollTrigger);
const Stairs = ({ children }) => {

    const pathname = usePathname()
    const pageRef = useRef(null)
    const blackbox = useRef()

    const transDev = useRef()
    useGSAP(() => {


        const boxes = gsap.utils.toArray(transDev.current.children)
        const tl = gsap.timeline()


        tl.set(transDev.current, {
            display: "flex",


        })

       

        tl.to(boxes, {
            scaleY: 1,
            ease: "power1.in",
            transformOrigin: "top center",
            duration: 0.2,
            stagger: { amount: -0.3 }
        }) // 👈 يبدأ مع أول سطر (blackbox)

        tl.to(blackbox.current, {
            opacity: 0,
            duration: 0.2,
            zIndex: -1

        }, "<+0.5")

        // }, "<+0.1") //
        tl.to(boxes, {
            scaleY: 0,
            ease: "power1",
            transformOrigin: "bottom center",
            duration: 0.3,
            stagger: {
                amount: 0.3
            }
        })



        tl.set(transDev.current, {
            display: "none"
        })

      




    }, [pathname]);


    return (
        <div className='overflow-hidden '>

            <div ref={transDev} className="transition  h-screen w-screen fixed top-0 z-30 flex">
                <div className="w-1/5 h-full scale-y-0 bg-black"></div>
                <div className="w-1/5 h-full scale-y-0 bg-black"></div>
                <div className="w-1/5 h-full scale-y-0 bg-black"></div>
                <div className="w-1/5 h-full scale-y-0 bg-black"></div>
                <div className="w-1/5 h-full scale-y-0 bg-black"></div>
            </div>
            <div ref={pageRef} className='relative '>
                <div ref={blackbox} className=' absolute top-0 left-0 bg-black z-50 w-full h-full'></div>
                {children}
            </div>
        </div>
    )
}

export default Stairs

