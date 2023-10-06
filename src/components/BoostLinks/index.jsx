import React from 'react'
import bgBoostDesktop from '../../assets/bg-boost-desktop.svg'
import bgBoostMobile from '../../assets/bg-boost-mobile.svg'

const BoostLinks = () => {
  return ( 
  
  <div className='h-[16rem] items-center relative overflow-hidden  bg-[var(--Dark-Violet)]  flex flex-center justify-center sm:h-[18rem] '>
   {/* <img src={bgBoostDesktop} alt="" className='absolute top-0 left-0 w-full h-full'/> */}

   <img src={bgBoostMobile} alt="" className='hidden sm:block absolute top-0 left-0 w-full h-full' />
      

   <img src={bgBoostDesktop} alt="" className='block sm:hidden absolute top-0 left-0 w-full h-full' />


    <div className='z-10 w-[100%] flex flex-col items-center'>

<h1 className='mb-[40px] text-[2.3rem] text-[var(--Off-white)] px-[100px] sm:p-0 sm:text-[1.6rem] sm:mb-[15px]'>Boost your links today</h1>

<div className='bg-[var(--Off-white)] rounded-[25px] '>
<button className='rounded-[25px]  px-[45px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)] sm:px-[45px] sm:text-[1.2rem]'>Get Started</button>

</div>

    </div>        
</div>
  )
}

export default BoostLinks