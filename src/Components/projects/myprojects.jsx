
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useContext, useEffect } from 'react';
import { myContext } from '../../App';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Aos from 'aos';


const myprojects = () => {
  const getContext = useContext(myContext)

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

    gsap.fromTo('.prtxt', { x: 300, opacity: 0 }, { x: 0, delay: 1, opacity: 1, duration: 1, stagger: 0.2, scrollTrigger: '#prcards' })
  }, [])
  Aos.init();

  return (

    <div id='prcards' className='pt-20 flex flex-col mx-auto container '>
      <div className='flex flex-col justify-center items-start   mx-10 md:mx-15 md:w-3/5    text-white '>
        <p className='font-semibold tracking-wider text-gray-400 prtxt '>MY WORK</p>
        <h5 className='title_text mt-1 prtxt'>Projects</h5>
        <p className='text-justify paragraph_text mt-3 prtxt'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-y-15 mt-10 mb-20 '>


        {
          getContext.array.map((item, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" className='prcards  flex ' key={index} >



              {/* project box  */}
              <div className={`flex mx-6 md:mx-15 md:h-103 2xl:h-110 
                 from-gray-950 to-gray-black shadow-lg md:shadow-xl shadow-gray-900 rounded-xl  ${index % 2 === 0 ? 'flex-col md:flex-row  bg-gradient-to-t  md:bg-gradient-to-l' : ' bg-gradient-to-t md:bg-gradient-to-r flex-col   md:flex-row-reverse'}`}>
                {/* project img */}
                <div className={` md:w-1/2 p-3 md:p-5   flex justify-center items-center  ${index % 2 === 0 ? ' md:rounded-l-xl' : ' md:rounded-r-xl'} `} >
                  <img className=' rounded-lg md:rounded-2xl  ' src={item.projectImg} alt="" />
                </div>
                {/* project details */}
                <div className={`md:w-1/2  p-5 md:p-10 text-white flex flex-col gap-3 md:gap-y-5   ${index % 2 === 0 ? ' md:rounded-r-xl' : 'md:rounded-l-xl'}`}>
                  <h2 className='title_text font-semibold  '>{item.projectName}</h2>
                  <p className='text-xs md:text-md text-justify font-semibold'> {item.projectDesc}</p>
                  <div className='flex gap-2 mt-1 flex-wrap'>
                    {
                      item.techStack.map((tech, idx) => (

                        <p key={idx} className='bg-gray-600 w-fit px-5 py-1 rounded-full text-xs md:text-sm font-semibold'>{tech}</p>



                      ))
                    }
                  </div>
                  <OpenInNewIcon sx={{ fontSize: 30 }} className='cursor-pointer mx-1 mt-3 ' onClick={() => window.open(item.projectLink)} />




                </div>

              </div>


            </div>
          ))
        }
















      </div>



    </div>
  )
}


export default myprojects