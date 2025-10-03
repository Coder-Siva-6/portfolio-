import react from 'react'
import NavBar from './Components/navBar/navBar'
import Hero from './Components/Hero/hero'
import { data, data1, array, skillLogos } from './data'

import { createContext } from 'react'


const dat = { data, data1, array, skillLogos }
export const myContext = createContext(dat)


function App() {



  return (

    <div className='h-full bg-black '>
      <div className='container mx-auto '>
        <myContext.Provider value={dat}>
          <NavBar />
          <Hero />
        </myContext.Provider>
      </div>
    </div>


  )








}


export default App