import React from 'react'
import BoostLinks from '../../components/BoostLinks'
import Footer from '../../components/Footer'
import Presentation from '../../components/Presentation'
import Statistics from '../../components/Statistics'

const Home = () => {
  return (<>
  
  <main className='App  text-center w-full mt-[180px] sm:mt-[100px] '>
    <Presentation/>
    <Statistics/>
    <BoostLinks/>
    <Footer/>
  </main>
  </>
  )
}

export default Home