import React from 'react'
import ilustrationWorking from '../../assets/illustration-working.svg'


const Presentation = () => {
  return (
    <section className=' flex sm:overflow-hidden sm:flex-col-reverse mb-[220px] px-[166px] sm:px-[20px]'>
        
    <div className='mt-[70px] text-start w-[570px] sm:w-auto '>
        <h1 className='mb-1 '>  
            More than just shorter links
        </h1>
        <p className='mb-10 w-[530px] sm:w-auto text-[22px] text-[var(--Grayish-Violet)]'> Build your brand’s recognition and get detailed insights 
            on how your links are performing.
        </p>
        <button className='rounded-[22px] px-[25px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Get Started</button>

    </div>
    <div className='overflow-hidden absolute sm:relative right-0 w-[770px]  h-[465px] sm:w-[500px] sm:h-[auto] sm:right-[40px]'>
    <img className='absolute sm:object-cover sm:relative top-0 right-[-140px] w-[770px] h-[465px] sm:w-[510px] sm:h-[330px] sm:right-[-50px]' src={ilustrationWorking} alt='Illustration' />
 
    </div>


</section>
  )
}

export default Presentation