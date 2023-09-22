import React from 'react'
import bgFormImage from '../../assets/bg-shorten-desktop.svg'


const Shorten = () => {
  return (
    <div className=' overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)] relative flex flex-center justify-center'>
            <img src={bgFormImage} alt="" className='absolute top-0 left-0 w-full h-full'/>

            <div className='z-10 p-[60px]'>

              <input type="text" placeholder='Shorten a link here...' />

              <button>Shorten It!</button>



            </div>

        


        
    </div>
  )
}

export default Shorten
