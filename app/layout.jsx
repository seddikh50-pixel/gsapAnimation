"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import Navbar from './components/common/Navbar';
import Stairs from './components/common/Stairs';
import { NavContext } from './components/context/NavContext';
import FullScreenNav from './components/navigation/FullScreenNav';
import { usePathname } from "next/navigation";

import { Black_Ops_One } from 'next/font/google';
import './globals.css';

const BlackOpsOne = Black_Ops_One({ subsets: ['latin'], weight: '400' });



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="">
        <div className=''>
          <Link href={"/"} className={BlackOpsOne.className + " text-[#f3e600] text-6xl font-bold p-1 text-border fixed z-[1001] "}>
            SED40
          </Link>
          <NavContext>
            <Navbar />
            <FullScreenNav />
            <Stairs>
              {children}
            </Stairs>
          </NavContext>
        </div>
      </body>
    </html>
  );
}
