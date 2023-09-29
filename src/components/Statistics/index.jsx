import React from 'react'
import Shorten from '../../components/Shorten'
import IconBrandRecognition from '../../assets/icon-brand-recognition.svg'
import IconDetailedRecords from '../../assets/icon-detailed-records.svg'
import IconFullyCustomizable from '../../assets/icon-fully-customizable.svg'
import { ShortenContext } from '../../context';
import { useContext } from 'react'

const Statistics = () => {

    const {shortenedLinks }=useContext(ShortenContext);




  return (

<section className='bg-[#ebebeb] px-[166px] pb-[130px]  '>
    <Shorten/>

    {shortenedLinks.map((link, index) => (
          <div key={index} className=" flex justify-between items-center mb-[10px] relative top-[-55px] bg-[var(--Off-white)] rounded-[4px] px-[20px] py-[11px]  text-[1.3rem]">
           {link.originalLink} 
            <div className=''>
             <a className='mr-[20px] text-[var(--Cyan)]'
             href={link.shortenedLink} 
             target="_blank" 
             rel="noopener noreferrer">
               {link.shortenedLink} </a>
              <button 
              className='rounded-[8px]  px-[35px] bg-[var(--Cyan)] font-bold text-[var(--Off-white)]'>Copy</button>


              </div>
          </div>
        ))}
    
        <h1 className=" mt-[40px] mb-[5px] text-center text-2xl font-bold py-4 text-[2.5rem]">
        Advanced Statistics
        </h1>
        <p className='px-[280px] text-[1.2rem] text-[var(--Grayish-Violet)] leading-9'>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>

          <div className="relative grid justify-center items-center text-start grid-cols-3 mt-[10px] gap-[25px]">
          <hr className="bg-[var(--Cyan)] h-3 w-full absolute mt-[30px]" />
              <div className="relative pt-16 pb-[25px] rounded  shadow-lg  bg-[var(--Off-white)]">
                  <div className="px-6 py-4">
                      <div className="absolute top-[-2rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)]">
                        <img src={IconBrandRecognition} alt="" />
                      </div>

                      <h3 className="font-bold text-[1.4rem] mb-2">Brand Recognition</h3>
                      <p className="text-[var(--Grayish-Violet)] text-base leading-7">
                          Boost your brand recognition with each click. Generic links don’t
                          mean a thing. Branded links help instil confidence in your content.
                      </p>
                  </div>
              </div>

              <div className="pt-16 pb-[25px] rounded relative  shadow-lg bg-[var(--Off-white)] mt-[80px] ">
                  <div className="px-6 py-4">

                      <div className="absolute top-[-2rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)]">
                        <img src={IconDetailedRecords} alt="" />
                      </div>
                      <h3 className="font-bold text-[1.4rem] mb-2">Detailed Records</h3>
                      <p className="text-[var(--Grayish-Violet)] text-base leading-7">
                          Gain insights into who is clicking your links. Knowing when and where
                          people engage with your content helps inform better decisions.
                      </p>
                  </div>
              </div>

              <div className="pt-16 pb-[25px] rounded relative shadow-lg  bg-[var(--Off-white)] mt-[160px]">
                  <div className="px-6 py-4">
                  <div className="absolute top-[-2rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)]">
                        <img src={IconFullyCustomizable} alt="" />
                      </div>
                      <h3 className="font-bold text-[1.4rem] mb-2">  Fully Customizable
                      </h3>
                      <p className="text-[var(--Grayish-Violet)] text-base leading-7">
                          Improve brand awareness and content discoverability through customizable
                          links, supercharging audience engagement.
                      </p>
                  </div>
              </div>

          </div>

    </section>
  )
}

export default Statistics