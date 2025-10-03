
import './hero.css'
import { useContext, useEffect } from 'react'
import { myContext } from '../../App'; //getting context api
import Intro from '../intro/intro'
import Skills from '../skills/skills'
import Myprojects from '../projects/myprojects'
import Contact from '../contact/contact'

import { FaLinkedin, FaInstagram, FaFacebookMessenger } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import gsap from 'gsap';
import image from '../../assets/myimg.png'
import { SteppedEase } from 'gsap';


const hero = () => {
    const getContext = useContext(myContext)
    const skills = getContext.skillLogos  // getting skill logos from context api
    useEffect(() => {

        gsap.fromTo('.skills', { x: -20, y: 300, opacity: 0 }, { x: 0, y: 0, stagger: 0.2, duration: 1.5, opacity: 1 })

        gsap.to('.profile', {
            y: -1,          // move up
            duration: 3,    // speed
            repeat: -1,       // infinite loop
            yoyo: true,       // reverse back down
            ease: "powerout2", // bounce easing
        });
        gsap.fromTo('.profile', { opacity: 0 }, { duration: 6, opacity: 1 })
        gsap.from('.text', { width: 1, delay: 1, duration: 2, ease: SteppedEase.config(100) })


    }, [])




    return (
        <div className='flex flex-col container mx-auto  overflow-hidden  '>


            <div className=' flex flex-col-reverse md:flex-row justify-between items-center md:mx-24 md:my-27  mx-10 mt-32  '>
                <div className=' text-container'>
                    <div>
                        <h2 className='font-inter mt-10'>Hello, It's Me </h2>
                        <h1 className='font-inter mt-1 text'>SivaGuru </h1>
                        <h3 className='font-robotosalb mt-2 md:mt-5 2xl:mt-5 '>And i'm a <br /><span>Full Stack Developer <span className={`text-white `}>&</span>  Freelancer</span></h3>
                        <p className='font-inter mt-2 '>Full Stack Developer & Freelancer helping businesses shine online. I craft scalable web apps with React, Node.js, Express & MongoDB, and design smooth, eye-catching interfaces using Tailwind, Material UI & GSAP animations. Let’s build something impactful together.
                        </p>
                    </div>
                    <div className='logo'>

                        <a href="https://www.linkedin.com/in/sivaguru-d-0608082a3/">  <FaLinkedin className='logos' type='button' /> </a>
                        <a href="https://www.instagram.com/dreamy_boy_siva_/">  <FaInstagram className='logos' /> </a>
                        <FaFacebookMessenger className='logos' />
                    </div>
                    <div className='flex gap-5 2xl:mt-2'>
                        <button className='flex items-center gap-2 px-4  py-2 2xl:px-7 2xl:py-3 bg-blue-700  rounded-[7px] text-[15px] 2xl:text-[19px] font- font-inter tracking-wider  hover:scale-99 hover:shadow-[0px_0px_5px_1px_blue]'> Download CV</button>
                        <button className='flex items-center gap-2 px-2 py-2 2xl:px-4 2xl:py-3  border-2  rounded-[8px] text-[15px] font-bold font-robotoslab hover:border-blue-500 hover:text-blue-600 hover:scale-99'>Hire Me <LuExternalLink className='text-[20px]' />
                        </button>
                    </div>
                    {/* ........................................SKILLS SECTION........................................................... */}
                    <div className='flex skill_logo container mx-auto gap-20 flex-col mt-1 2xl:mt-5'>
                        <div className='flex gap-3 2xl:gap-5'>
                            <img className='skills' src={skills[0].logo} alt="" />
                            <img className='skills' src={skills[1].logo} alt="" />
                            <img className='skills' src={skills[4].logo} alt="" />
                            <img className='skills' src={skills[8].logo} alt="" />
                            <img className='skills' src={skills[12].logo} alt="" />
                        </div>

                    </div>

                </div>

                <div >
                    <div className='imgdiv profile' >

                        <img className='img' src={image} alt="" />
                        <div className='img_style'></div>

                    </div>
                </div>

            </div>
            <Intro />
            <Skills ></Skills>
            <Myprojects />

            <Contact />




        </div>
    )
}

export default hero

