import React, {useContext, useState} from 'react'
import bgFormImage from '../../assets/bg-shorten-desktop.svg'
import { ShortenContext } from '../../context';

const Shorten = () => {
  const {handleShortenedLinkChange,handleLinkChange,linkToShorten }=useContext(ShortenContext);


console.log(linkToShorten)
const handleShortenClick=()=>{

  fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(linkToShorten)}`)
  .then(response=>response.json())
  .then(data=>{
    if(data.ok){
      handleShortenedLinkChange(linkToShorten,data.result.full_short_link)
    }else{
      alert('hubo un error al acortar el enlace, intentelo de nuevo por favor,')
    }
  })
  .catch(error=>console.error('error al llamar a la API:', error))
 
}

  return (
    <div className='p-[50px] py-[60px] overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)] relative top-[-80px] flex flex-center justify-center'>
            <img src={bgFormImage} alt="" className='absolute top-0 left-0 w-full h-full'/>

            <div className='z-10 w-[100%] flex justify-around '>
           
       
              <input 
              id="linkToShorten"
              className='rounded-[8px] pl-8 w-[75%] py-[16px]' 
              type="text" 
              placeholder='Shorten a link here...' 
              value={linkToShorten}
              onChange={handleLinkChange}
              />

              <button 
               onClick={handleShortenClick}
              className='rounded-[8px] w-[20%] px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Shorten it!</button>

            </div>        
            
    </div>
  )
}

export default Shorten
