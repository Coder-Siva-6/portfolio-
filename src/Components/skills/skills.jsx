import React, { useEffect } from 'react'
import { useContext } from 'react';
import { myContext } from '../../App';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const skills = () => {
    gsap.registerPlugin(ScrollTrigger);




    useEffect(() => {
        gsap.fromTo('.skill', { y: 400, opacity: 0 }, { y: 0, delay: 1, opacity: 1, duration: 1, stagger: 0.1, scrollTrigger: '#skill' })

    }, [])



    const getContext = useContext(myContext)
    const skills = getContext.skillLogos  // getting skill logos from context api
    const skill_1 = skills.slice(0, 10).map((logo, index) => {
        return (
            <div key={index} className='skill  flex-col  justify-evenly bg-gradient-to-tr from-15% from-gray-900 to-gray-800 w-22 h-28 2xl:w-30  2xl:h-35  rounded-xs ' >
                <img src={logo.logo} className='size-10 2xl:size-15 translate-[-50%] top-[35%] relative left-[50%]' alt="" />
                <h2 className='mt-10 text-center font-semibold  text-white text-xs 2xl:text-md  '>{logo.title}</h2>

            </div>
        )
    })
    const skill_2 = skills.slice(10, 17).map((logo, index) => {
        return (
            <div key={index} className='skill hidden md:block     flex-col  justify-evenly bg-gradient-to-tr from-15% from-gray-900 to-gray-800 w-22 h-28 2xl:w-30  2xl:h-35  rounded-xs ' >
                <img src={logo.logo} className='size-10 2xl:size-15 translate-[-50%] top-[35%] relative left-[50%]' alt="" />
                <h2 className='mt-10 text-center font-semibold  text-white text-xs 2xl:text-md  '>{logo.title}</h2>

            </div>
        )
    })
    const skill_21 = skills.slice(10, 17).map((logo, index) => {
        return (
            <div key={index} className='skill  md:hidden    flex-col  justify-evenly bg-gradient-to-tr from-15% from-gray-900 to-gray-800 w-22 h-28 2xl:w-30  2xl:h-35  rounded-xs ' >
                <img src={logo.logo} className='size-10 2xl:size-15 translate-[-50%] top-[35%] relative left-[50%]' alt="" />
                <h2 className='mt-10 text-center font-semibold  text-white text-xs 2xl:text-md  '>{logo.title}</h2>

            </div>
        )
    })

    const task = skills.slice(17).map((logo, index) => {
        return (
            <div key={index} className=' skill     flex-col  justify-evenly bg-gradient-to-tr from-15% from-gray-900 to-gray-800 w-22 h-28 2xl:w-30  2xl:h-35  rounded-xs ' >
                <img src={logo.logo} className='size-10 2xl:size-15 translate-[-50%] top-[35%] relative left-[50%]' alt="" />
                <h2 className='mt-10 text-center font-semibold  text-white text-xs 2xl:text-md  '>{logo.title}</h2>

            </div>
        )
    })







    return (
        <div id='skill' className='  container mx-auto  flex justify-center overflow-hidden '>
            <div className='flex flex-col gap-y-5   pt-10  w-screen md:w-auto  '>

                <h3 className='skill text-center   font-bold title_text '>Skills</h3>
                <div className='flex flex-wrap md:flex-nowrap justify-center flex-row gap-y-4 md:gap-y-0  gap-x-4 md:gap-x-4  mt-3 '>
                    {skill_1} {skill_21}
                </div>

                <div className='flex flex-wrap md:flex-nowrap justify-center flex-row gap-y-4 md:gap-y-0  gap-x-4 md:gap-x-4'>

                    {skill_2}
                </div>
                <div className='flex flex-col justify-center  mt-5 md:mt-10'>
                    <h1 className='skill  title_text text-center  2xl:mt-7  text-white'>Tools and Softwares</h1>

                    <div className='flex mt-10  flex-wrap md:flex-nowrap justify-center flex-row gap-y-4 md:gap-y-0  gap-x-4 md:gap-x-5 '>

                        {task}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default skills