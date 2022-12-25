'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center md:px-[4%] sm:px-[4%] px-[2%] py-2 bg-[#2c2c2c] relative">
            <div className="flex justify-evenly items-center">
                <Image src={"/dgmlogo.png"} width={70} height={70} alt="Dominion Gospel Ministry Logo" />
                <h1 className="text-white font-robotoCondensed md:text-2xl sm:text-2xl text-xs uppercase md:font-bold sm:font-bold font-medium pl-2">Dominion Gospel Ministry</h1>
            </div>
            <div className='lg:hidden flex justify-end mr-4'>
                <i className='fa-sharp fa-solid fa-bars text-xl cursor-pointer text-[#c5c4c4]' onClick={() => setIsMenuOpen(true)}></i>
            </div>
            <div className="hidden lg:flex gap-[30px]">
                <Link className="text-white font-Roboto lg:text-base md:text-sm sm:text-sm text-xs font-semibold hover:bg-blue-600 focus:bg-blue-600 md:p-2 p-4 active:bg-blue-500" href="/">Home</Link>
                <Link className="text-white font-Roboto lg:text-base font-semibold hover:bg-blue-600 focus:bg-blue-600 md:p-2 p-4 active:bg-blue-500" href="/about">About</Link>
                <Link className="text-white font-Roboto lg:text-base font-semibold hover:bg-blue-600 focus:bg-blue-600 md:p-2 p-4 active:bg-blue-500" href="/sermon">Sermon</Link>
                <Link className="text-white font-Roboto lg:text-base font-semibold hover:bg-blue-600 focus:bg-blue-600 md:p-2 p-4 active:bg-blue-500" href="/team">Team</Link>
            </div>
            <Link className="hidden lg:flex text-white font-Roboto lg:text-base md:text-sm font-semibold bg-[#03014b] md:px-2 md:py-2 px-3 py-4 rounded-xl" href="/contact">Contact Us</Link>
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 right-0 flex flex-col  bg-[#2c2c2c] min-h-screen min-w-[30%] z-[9999] shadow-lg">
                    <i className='fa-sharp fa-solid fa-xmark text-2xl cursor-pointer pt-2 pl-2 mb-10 text-[#c5c4c4]' onClick={() => setIsMenuOpen(false)}></i>
                    <Link className="text-white font-Roboto text-base font-semibold hover:bg-[#969595] focus:bg-blue-600 p-4 active:bg-blue-500" href="/">Home</Link>
                    <Link className="text-white font-Roboto text-base font-semibold hover:bg-[#969595] focus:bg-blue-600 p-4 active:bg-blue-500" href="/about">About</Link>
                    <Link className="text-white font-Roboto text-base font-semibold hover:bg-[#969595] focus:bg-blue-600 p-4 active:bg-blue-500" href="/sermon">Sermon</Link>
                    <Link className="text-white font-Roboto text-base font-semibold hover:bg-[#969595] focus:bg-blue-600 p-4 active:bg-blue-500" href="/team">Team</Link>
                    <Link className="lg:hidden text-white font-Roboto text-base font-semibold bg-[#03014b] px-3 py-4 rounded-xl" href="/contact">Contact Us</Link>
                </div>
            )}

        </div>
    )
}