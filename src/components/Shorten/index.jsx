import React from 'react'
import bgFormImage from '../../assets/bg-shorten-desktop.svg'


const Shorten = () => {
  return (
    <div className='p-[50px] py-[60px] overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)] relative top-[-80px] flex flex-center justify-center'>
            <img src={bgFormImage} alt="" className='absolute top-0 left-0 w-full h-full'/>

            <div className='z-10 w-[100%] flex justify-around '>

              <input className='rounded-[8px] pl-8 w-[75%]' type="text" placeholder='Shorten a link here...' />

              <button className='rounded-[8px] w-[20%] px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Shorten it!</button>

            </div>        
    </div>
  )
}

export default Shorten
