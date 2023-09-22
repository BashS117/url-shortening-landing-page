import React from 'react'
import ilustrationWorking from '../../assets/illustration-working.svg'

const Presentation = () => {
  return (
    <section className=' flex mb-[140px]'>
        
    <div className='mt-[70px] text-start w-[570px] '>
        <h1 className='mb-1 '>  
            More than just shorter links
        </h1>
        <p className='mb-10 w-[530px] text-[22px]'> Build your brand’s recognition and get detailed insights 
            on how your links are performing.
        </p>
        <button className='rounded-[22px] px-[25px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Get Started</button>

    </div>
    <div className='overflow-hidden absolute right-0 w-[770px] h-[465px] '>
    <img className='absolute top-0 right-[-140px] w-[770px] h-[465px]' src={ilustrationWorking} alt='Illustration' />

    </div>


</section>
  )
}

export default Presentation