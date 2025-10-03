import React, { useEffect } from 'react';
import fullstack from '../../assets/fullstack.png';
import freelancer from '../../assets/freelancer.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const intro = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo('.cards', { y: 300, opacity: 0 }, { opacity: 1, y: 0, delay: 1, stagger: 0.3, duration: 1.5, ease: "power2", scrollTrigger: '#cards' });
        gsap.fromTo('.txt', { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.2, scrollTrigger: '#cards' })
    }, [])

    return (
        <div className='container mx-auto flex flex-col  md:mt-5 mt-10'>
            <div className='flex'>


                <div id='cards' className='mx-10 md:mx-25 md:w-3/5    text-white '>
                    <p className='font-semibold tracking-wider text-gray-400 text-xs md:text-sm txt'>INTRODUCTION</p>
                    <h2 className='title_text mt-1 txt'>Over View</h2>
                    <p className='paragraph_text mt-3 txt text-justify md:text-start'>    I'm a skilled software developer with experience in  JavaScript, and expertise in frameworks like <span className='font-bold'> React, Node.js, Express.js and MongoDB </span>. I'm a quick learner and collaborate closely with clients to create <span className='font-bold'> efficient, scalable, and user-friendly  </span>. solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                </div>
            </div>
            {/*  cards */}
            <div className='flex flex-col md:flex-row mt-7   justify-center items-center gap-10 md:gap-15 md:p-10  font-robotosalb'>

                <div id='box' className='cards flex flex-col justify-center items-center  gap-15 rounded-xl border-[1px] border-white shadow-[0px_0px_12px_2px] shadow-white w-[50%] md:w-[20%] h-60 md:h-75 2xl:h-90 bg-gradient-to-bl from-10% from-gray-500 to-gray-900 '>
                    <img className='size-15 md:size-20' src={fullstack} alt="" />
                    <h2 className='text-center text-xl md:text-2xl font-semibold text-white  tracking-wide'>Frontend<br /></h2>
                </div>
                <div className=' cards  flex flex-col justify-center items-center  gap-15 rounded-xl border-[1px] border-white shadow-[0px_0px_12px_2px] shadow-white w-[50%] md:w-[20%] h-60 md:h-75  2xl:h-90  bg-gradient-to-bl from-10% from-gray-500 to-gray-900 '>
                    <img className='size-15 md:size-20' src={freelancer} alt="" />
                    <h2 className='text-center text-xl md:text-2xl  font-semibold text-white  tracking-wide'>Free Lancing
                    </h2>
                </div>
                <div className='cards flex flex-col justify-center items-center  gap-15 rounded-xl border-[1px] border-white shadow-[0px_0px_12px_2px] shadow-white w-[50%] md:w-[20%] h-60 md:h-75  2xl:h-90  bg-gradient-to-bl from-10% from-gray-500 to-gray-900 '>
                    <img className='size-15 md:size-20' src={fullstack} alt="" />
                    <h2 className='text-center text-xl md:text-2xl  font-semibold text-white  tracking-wide'>Backend <br /> </h2>
                </div>




            </div>




        </div>
    )
}

export default intro