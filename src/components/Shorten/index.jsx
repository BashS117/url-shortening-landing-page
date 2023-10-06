import React, {useContext, useState} from 'react'
import bgFormImageDesktop from '../../assets/bg-shorten-desktop.svg'
import bgFormImageMobile from '../../assets/bg-shorten-mobile.svg';


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
    <div className='z-10 p-[50px] py-[60px] overflow-hidden rounded-[8px] bg-[var(--Dark-Violet)] relative top-[-80px] flex flex-center justify-center sm:p-[22px] '>
           
           
           {/* Mostrar imagen para Desktop */}
      <img src={bgFormImageDesktop} alt="" className='block sm:hidden absolute top-0 left-0 w-full h-full' />

{/* Mostrar imagen para mobile */}
<div><img src={bgFormImageMobile} alt="" className='hidden sm:block absolute top-0 left-0 w-full h-full sm:pr-[100px] sm:h-[77%] sm:left-[100px]' />
</div>

      <div className='z-10 w-[100%] flex justify-around sm:flex-col sm:justify-between sm:h-[auto]'>
      
        <input
          id="linkToShorten"
          className={`rounded-[8px] pl-8 w-[75%] py-[16px] sm:mb-[10px] sm:pl-4 ${isInputEmpty ? 'placeholder-red-500 border-2 border-red-400 sm:mb-0' : ''} sm:w-auto sm:py-[12px] sm:text-[1rem]`}
          type="text"
          placeholder='Shorten a link here...'
          value={linkToShorten}
          onChange={handleLinkChange}
        />
  {isInputEmpty && <div className="text-red-500 absolute left-[70px] top-[124px] sm:flex sm:left-0 sm:top-0 sm:relative sm:text-[0.8rem] sm:mt-1 sm:mb-3">Please add a link</div>} {/* Mostrar mensaje de error si hay error */}


        <div className='bg-[var(--Off-white)] rounded-[8px]'>
          <button
            onClick={handleShortenClick}
            className='button-container rounded-[8px] h-[100%] px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)] sm:w-full'>Shorten It!</button>

        </div>

      </div>        
            
    </div>
  )
}

export default Shorten
