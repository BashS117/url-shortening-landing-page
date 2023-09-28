import React from 'react'
import bgBoostDesktop from '../../assets/bg-boost-desktop.svg'

const BoostLinks = () => {
  return ( 
  
  <div className='h-[16rem] items-center relative overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)]  flex flex-center justify-center'>
   <img src={bgBoostDesktop} alt="" className='absolute top-0 left-0 w-full h-full'/>

    <div className='z-10 w-[100%] flex flex-col items-center'>

<h1 className='mb-[40px] text-[2.5rem] text-[var(--Off-white)] px-[100px]'>Boost your links today</h1>
      <button className='rounded-[8px] w-[20%] px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Get Started</button>

    </div>        
</div>
  )
}

export default BoostLinks