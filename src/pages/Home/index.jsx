import React from 'react'
import BoostLinks from '../../components/BoostLinks'
import Presentation from '../../components/Presentation'
import Statistics from '../../components/Statistics'

const Home = () => {
  return (<>
  
  <main className='App  text-center w-full '>
    <Presentation/>
    <Statistics/>
    <BoostLinks/>
  </main>
  </>
  )
}

export default Home