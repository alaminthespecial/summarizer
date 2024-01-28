'use client';

import React from 'react'
import { useState } from 'react';
import ThemeButton from './components/ThemeButton';
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <>
            <nav className='mbg-black'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <a href='/' className='dark:text-green-400 font-bold'>Logo</a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <ThemeButton />
                                <a href='/' className='hover:dark dark:text-green-400 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium'>
                                    Home
                                </a>
                                <a href='/summarizer' className='dark:text-green-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                    Summarizer
                                </a>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <ThemeButton/>
                            <button
                                className='
          inline-flex items-center justify-center p-2 rounded-md dark:text-white 
          dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white
        '
                                onClick={toggleNavbar}
                            >
                                {navbarOpen ? (
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>


                {navbarOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a href='/' className='dark:text-green-400 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Home
                            </a>
                            <a href='/summarizer' className='dark:text-green-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Summarizer
                            </a>
                        </div>

                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar