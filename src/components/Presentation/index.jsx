import React from 'react'
import ilustrationWorking from '../../assets/illustration-working.svg'


const Presentation = () => {
  return (
    <section className=' flex  mb-[220px] px-[166px] sm:px-[20px] sm:mb-[166px]'>
        
    <div className='mt-[70px] text-start w-[570px] sm:w-auto sm:mt-[370px] sm:text-center'>
        <h1 className='mb-1 sm:mb-4 sm:text-[2.5rem] '>  
            More than just shorter links
        </h1>
        <p className='mb-10 w-[530px] sm:w-auto text-[22px] text-[var(--Grayish-Violet)] sm:text-[1.2rem]'> Build your brand’s recognition and get detailed insights 
            on how your links are performing.
        </p>
        <button className='rounded-[22px] px-[25px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)] sm:px-[50px] sm:py-[14px] sm:rounded-[30px]'>Get Started</button>

    </div>
    <div className='overflow-hidden absolute  right-0 w-[770px]  h-[465px]  '>
    <img className='absolute smt:object-cover  top-0 right-[-140px] w-[770px] h-[465px] sm:w-[490px] sm:h-[330px] ' src={ilustrationWorking} alt='Illustration' />
 
    </div>


</section>
  )
}

export default Presentation