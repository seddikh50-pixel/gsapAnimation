"use client"

import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef, useState } from "react";
import { Black_Ops_One } from 'next/font/google';
import Link from 'next/link';
import { useNavContext } from '../context/NavContext';


const BlackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: '400' });


const FullScreenNav = () => {
    const [isOpen, setIsOpen] = useNavContext()

    const fullScreenRef = useRef(null)

    const marqueeRef1 = useRef(null);
    const marqueeRef2 = useRef(null);
    const marqueeRef3 = useRef(null);
    const marqueeRef4 = useRef(null);
    const closeRef = useRef()
    const transDev = useRef()
    const bigWrapper = useRef(null)
    const wrapperRef1 = useRef(null)
    const wrapperRef2 = useRef(null)
    const wrapperRef3 = useRef(null)
    const wrapperRef4 = useRef(null)




    useGSAP(() => {
     
        
        gsap.to(marqueeRef1.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });
        gsap.to(marqueeRef2.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });
        gsap.to(marqueeRef3.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });

        gsap.to(marqueeRef4.current, {
            x: "-50%",
            repeat: -1,
            ease: "linear",
            duration: 5, // السرعة
        });


    })




    useGSAP(() => {
        const boxes = Array.from(transDev.current.children);
        const currents = [wrapperRef1, wrapperRef2, wrapperRef3, wrapperRef4].map((w) => w.current)
        // gsap.to(fullScreenRef.current, {
        //         display: "none"
        //     })

        if (isOpen) {
            const tl = gsap.timeline();

            // 1. خلي الـ container ظاهر + شفاف
            tl.set(fullScreenRef.current, { display: "block", opacity: 0, y: -50 });
            tl.set(transDev.current, { display: "flex" })


            // 2. خليه يبان
            tl.to(fullScreenRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.inOut",
            });


            // 3. بعدين boxes تختفي
            tl.from(boxes, {
                scaleY: 1,
                duration: 0.4,
                transformOrigin: "top center",
                stagger: { amount: 0.3, ease: "power2.inOut" },
                onComplete: () => transDev.current.style.display = "none"

            }, "-=0.3"); // -=0.3 
            tl.from(currents, {
                duration: 0.5,
                scaleY: 0,
                transformOrigin: "bottom center",
                stagger: {
                    amount: -.3
                },
            }, "<")
        } else {
            
            const tl = gsap.timeline()
            tl.set(transDev.current, { display: "flex" })
            tl.from(boxes, {
                scaleY: 1,
                duration: 0.6,
                transformOrigin: "bottom center",
                   stagger: { amount: -0.3, ease: "power2.inOut" },

            });
            tl.to(fullScreenRef.current, {
                opacity: 0,
                y: -100,
                duration: 0.6,
                ease: "power2.inOut",

                onComplete: () => {
                    fullScreenRef.current.style.display = "none";
                }
            }, "-=0.3");

        }

    }, [isOpen]);






    return (
        <div ref={fullScreenRef} id='fullscreennav' className={`${isOpen ? "block": "hidden"} py-40 w-full h-screen overflow-hidden z-50 absolute bg-black    `}>
            <div ref={transDev} className="transition  h-screen w-screen fixed top-0 z-[1000] flex">
                <div className="w-1/5 h-full scale-y-0 border-r   bg-[#f3e600]"></div>
                <div className="w-1/5 h-full scale-y-0 border-r  bg-[#f3e600]"></div>
                <div className="w-1/5 h-full scale-y-0 border-r  bg-[#f3e600]"></div>
                <div className="w-1/5 h-full scale-y-0 border-r  bg-[#f3e600]"></div>
                <div className="w-1/5 h-full scale-y-0 border-r  bg-[#f3e600]"></div>
                <div className="w-1/5 h-full scale-y-0 border-r  bg-[#f3e600]"></div>
        
            </div>
            <div ref={bigWrapper} className={` `}>
                <div className='flex justify-between absolute top-0 w-full z-50   '>
                    <div className=''>
                        <h1 className={BlackOpsOne.className + " text-[#f3e600] text-6xl font-bold p-1 text-border "}>SED40</h1>
                    </div>
                    <div ref={closeRef} onClick={() => setIsOpen(false)} className=' right-1 group  h-36 w-36 text-white flex justify-center cursor-pointer transition-all items-center flex-col  bg-black z-40 '>
                        <div className='w-full h-[2px] group-hover:bg-[#55ead4] bg-[#f3e600] transition-all rotate-45'></div>
                        <div className='w-full h-[2px] group-hover:bg-[#55ead4] bg-[#f3e600] transition-all  -rotate-45'></div>
                    </div>
                </div>
                <div
                    id='links' className=''   >
                    <div ref={wrapperRef1} className=' relative z-10  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef1.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef1.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef1.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef1.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold pt-3 text-center text-[16vh] leading-[0.9] border-[#f3e600] border-t'
                        >Projects</h1>
                        <div ref={marqueeRef1} className='flex absolute top-0 z-40   bg-[#f3e600] scale-y-0     '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5 top-0 '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                        </div>
                    </div>

                    <div ref={wrapperRef2} className=' relative  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef2.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef2.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef2.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef2.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold pt-3 text-center text-[16vh] leading-[0.9] border-t-[#f3e600] border-t'
                        >Agency</h1>
                        <div ref={marqueeRef2} className='flex absolute top-0 z-10 bg-[#f3e600] scale-y-0      '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5 top-0 '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                        </div>
                    </div>


                    <div ref={wrapperRef3} className=' relative  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef3.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef3.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef3.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef3.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold pt-3 text-center text-[16vh] leading-[0.9] border-t-[#f3e600] border-t'
                        >Contact</h1>
                        <div ref={marqueeRef3} className='flex absolute top-0 z-10 bg-[#f3e600] scale-y-0      '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5 top-0 '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                        </div>
                    </div>




                    <div ref={wrapperRef4} className=' relative  bg-black'
                        onMouseEnter={(e) => {
                            const rect = wrapperRef4.current.getBoundingClientRect();
                            const height = rect.height / 2
                            const MousePos = e.clientY - rect.top
                            const isFromTop = MousePos > height
                            gsap.to(marqueeRef4.current, { scaleY: 1, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "bottom center" : "top center" });
                        }}
                        onMouseLeave={(e) => {
                            const rect = marqueeRef4.current.getBoundingClientRect();
                            const isFromTop = e.clientY <= rect.top; // خرج من فوق
                            gsap.to(marqueeRef4.current, { scaleY: 0, duration: 0.2, ease: "power1", transformOrigin: isFromTop ? "top center" : "bottom center" });
                        }}
                    >
                        <h1 className='uppercase text-[#f3e600] font-bold pt-3 text-center text-[16vh] leading-[0.9] border-t-[#f3e600] border-b border-t'
                        >Blog</h1>
                        <div ref={marqueeRef4} className='flex absolute top-0 z-10 bg-[#f3e600] scale-y-0      '>
                            <div className='flex  items-center justify-center overflow-hidden gap-5  '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                            <div className='flex  items-center justify-center overflow-hidden gap-5 top-0 '>
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1.jpg"} />
                                <h2 className='uppercase font-bold pt-3 text-center text-[16vh] leading-[0.9] whitespace-nowrap'>to see everything</h2>
                                <Image width={210} height={60} className='object-cover rounded-full' alt='link1' src={"/images/link1-2.png"} />

                            </div>
                        </div>
                    </div>






                </div>

            </div>

        </div>
    )
}

export default FullScreenNav