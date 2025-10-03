import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const navBar = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      gsap.from('.link', { y: -100, opacity: 0, stagger: 0.2, duration: 0.7, ease: 'power2.out' })

    }
  }, [toggle])

  return (
    <div className='navbar '>
      <nav>
        <h1 className='font-engagement font-semibold'>Portfolio</h1>

        <ul className='font-inter pc hidden md:flex'>
          <a href="#"><li>HOME</li></a>
          <a href="#prcards"><li>PROJECTS</li></a>
          <a href=""><li>ABOUT</li></a>
          <a href="#contact"> <li>CONTACT</li> </a>
        </ul>
        {
          toggle &&

          <ul className='transition-all ease-in-out  font-inter mobile  md:hidden flex flex-col items-center absolute top-17 left-0 bg-black opacity-[90%] w-screen py-5 h-80 gap-7'>
            <a onClick={() => setToggle(!toggle)} href="#"><li className='link'>HOME</li></a>
            <a onClick={() => setToggle(!toggle)} href="#prcards"><li className='link'>PROJECTS</li></a>
            <a onClick={() => setToggle(!toggle)} href=""><li className='link'>ABOUT</li></a>
            <a onClick={() => setToggle(!toggle)} href="#contact"> <li className='link'>CONTACT</li> </a>
          </ul>

        }

        <div className='md:hidden'>
          <MenuIcon sx={{ fontSize: 30 }} onClick={() => setToggle(!toggle)} className='text-white  absolute right-5 top-5 md:hidden' />
        </div>
      </nav>

    </div>

  )
}

export default navBar
