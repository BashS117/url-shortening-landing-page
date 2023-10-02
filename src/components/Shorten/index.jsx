import React, {useContext, useState} from 'react'
import bgFormImage from '../../assets/bg-shorten-desktop.svg'
import { ShortenContext } from '../../context';

const Shorten = () => {
  const {handleShortenedLinkChange,handleLinkChange,linkToShorten,setIsInputEmpty,isInputEmpty }=useContext(ShortenContext);


console.log(linkToShorten)
const handleShortenClick=()=>{

  if (linkToShorten.trim() === '') {
    setIsInputEmpty(true); // Establecer el error si el input está vacío
    return;
  }

  fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(linkToShorten)}`)
  .then(response=>response.json())
  .then(data=>{
    if(data.ok){
      setIsInputEmpty(false); // Resetear el error si el acortamiento es exitoso
         
      handleShortenedLinkChange(linkToShorten,data.result.full_short_link)
    }else{
      alert('hubo un error al acortar el enlace, intentelo de nuevo por favor,')
    }
  })
  .catch(error=>console.error('error al llamar a la API:', error))
 
}

  return (
    <div className='z-10 p-[50px] py-[60px] overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)] relative top-[-80px] flex flex-center justify-center'>
            <img src={bgFormImage} alt="" className='absolute top-0 left-0 w-full h-full'/>

            <div className='z-10 w-[100%] flex justify-around '>
            {isInputEmpty && <div className="text-red-500 absolute left-[60px] top-[124px]">Please add a link</div>} {/* Mostrar mensaje de error si hay error */}

       
              <input 
              id="linkToShorten"
              className={`rounded-[8px] pl-8 w-[75%] py-[16px] ${isInputEmpty ? 'placeholder-red-500 border-2 border-red-400' : ''}`} 
              type="text" 
              placeholder='Shorten a link here...' 
              value={linkToShorten}
              onChange={handleLinkChange}
              />
     
     <div className='bg-[var(--Off-white)] rounded-[8px]'>
     <button 
               onClick={handleShortenClick}
              className='button-container rounded-[8px] h-[100%] px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Shorten It!</button>

     </div>
            
            </div>        
            
    </div>
  )
}

export default Shorten
