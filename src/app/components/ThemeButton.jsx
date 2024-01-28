'use client';
import { useTheme } from 'next-themes';
import React from 'react'
import { useState, useEffect } from 'react' 
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme() 
    const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  
  return (
    
      <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        {resolvedTheme === 'dark' ?( 
        <SunIcon className='h-5 w-5 text-orange-300'/>) : (
        <MoonIcon className='h-5 w-5 text-slate-800'/>)
        }
      </button>
   
  )
}

export default ThemeButton