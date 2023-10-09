import React from 'react'
import Shorten from '../../components/Shorten'
import IconBrandRecognition from '../../assets/icon-brand-recognition.svg'
import IconDetailedRecords from '../../assets/icon-detailed-records.svg'
import IconFullyCustomizable from '../../assets/icon-fully-customizable.svg'
import { ShortenContext } from '../../context';
import { useContext } from 'react'

const Statistics = () => {

    const {shortenedLinks,copied,setShortenedLinks }=useContext(ShortenContext);

    





  return (

<section className='bg-[#ebebeb] px-[166px] pb-[130px] sm:px-[20px] sm:pb-[80px] '>
    <Shorten/>

    {shortenedLinks.map((link, index) => (
          <div key={index} className=" flex justify-between items-center mb-[10px] relative top-[-55px] bg-[var(--Off-white)] rounded-[4px] px-[20px] py-[0px]  text-[1.3rem] sm:px-0 sm:flex-col sm:text-[0.9rem] sm:text-start ">
           <p className='sm:px-[15px] text-[var(---Very-Dark-Violet)] sm:mt-[15px]'>
            {link.originalLink} </p>
        <div className='sm:pt-[10px] sm:border-t sm:px-[15px] sm:mb-[15px] sm:border-[var(--Gray)] my-[10px]'>
          <a className='mr-[20px] text-[var(--Cyan)] '
            href={link.shortenedLink}
            target="_blank"
            rel="noopener noreferrer">
            {link.shortenedLink} </a>
          <button
            onClick={() => {
              const updatedLinks = [...shortenedLinks];
              updatedLinks[index].copied = true;
              setShortenedLinks(updatedLinks);
            }}
            className={`rounded-[8px]   ${link.copied ? 'bg-[var(--Dark-Violet)] px-[21px]' : 'bg-[var(--Cyan)] px-[35px]'} font-bold text-[var(--Off-white)] sm:w-full sm:mt-[10px] `}>

            {link.copied ? 'Copied!' : 'Copy'}</button>


        </div>
          </div>
        ))}
    
        <h1 className=" mt-[40px] mb-[5px] text-center text-2xl font-bold py-4 text-[2.5rem] sm:mt-[0px] sm:text-[1.8rem]">
        Advanced Statistics
        </h1>
        <p className='px-[280px] sm:px-4 text-[1.2rem] text-[var(--Grayish-Violet)] leading-9 sm:text-[1rem] sm:leading-7'>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>

          <div className="relative grid justify-center items-center text-start grid-cols-3 mt-[10px] gap-[25px] sm:flex sm:flex-col sm:mt-[80px] sm:text-center">
          <hr className="bg-[var(--Cyan)] h-3 w-full absolute mt-[30px] sm:w-2 sm:h-full sm:mt-0" />
              <div className="relative pt-16 pb-[25px] rounded  shadow-lg  bg-[var(--Off-white)]">
                  <div className="px-6 py-4">
                      <div className="absolute top-[-2.6rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)] sm:left-[7.6rem]">
                        <img src={IconBrandRecognition} alt="" />
                      </div>

                      <h3 className="font-bold text-[1.4rem] mb-2">Brand Recognition</h3>
                      <p className="text-[var(--Grayish-Violet)] text-base leading-7">
                          Boost your brand recognition with each click. Generic links don’t
                          mean a thing. Branded links help instil confidence in your content.
                      </p>
                  </div>
              </div>

              <div className="pt-16 pb-[25px] rounded relative  shadow-lg bg-[var(--Off-white)] mt-[80px] sm:mt-[68px] ">
                  <div className="px-6 py-4">

                      <div className="absolute top-[-2.6rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)] sm:left-[7.6rem]">
                        <img src={IconDetailedRecords} alt="" />
                      </div>
                      <h3 className="font-bold text-[1.4rem] mb-2">Detailed Records</h3>
                      <p className="text-[var(--Grayish-Violet)] text-base leading-7">
                          Gain insights into who is clicking your links. Knowing when and where
                          people engage with your content helps inform better decisions.
                      </p>
                  </div>
              </div>

              <div className="pt-16 pb-[25px] rounded relative shadow-lg  bg-[var(--Off-white)] mt-[160px]  sm:mt-[68px]">
                  <div className="px-6 py-4">
                  <div className="absolute top-[-2.6rem] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-[var(--Dark-Violet)] sm:left-[7.6rem]">
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