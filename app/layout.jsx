"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import Navbar from './components/common/Navbar';
import Stairs from './components/common/Stairs';
import { NavContext } from './components/context/NavContext';
import FullScreenNav from './components/navigation/FullScreenNav';
import { usePathname } from "next/navigation";

import { Orbitron } from "next/font/google";

// تقدر تحدد الـ subsets (مثلاً latin) والوزن (400, 700, إلخ)
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // اختياري: تحدد الأوزان اللي تحتاجها
});
import './globals.css';





export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={orbitron.className}>
        <div className=''>
          <Link href={"/"} className={" text-[#f3e600] xl:text-6xl text-4xl md:text-4xl  sm:text-4xl font-bold p-1 left-2 text-border fixed z-[1001] "}>
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
