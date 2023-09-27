import React from 'react'
import Shorten from '../../components/Shorten'


const Statistics = () => {
  return (

<section className='bg-[#ebebeb] px-[166px] '>
    <Shorten/>
    
        <h1 class=" mt-[35px] mb-[5px] text-center text-2xl font-bold py-4 text-[2.5rem]">
        Advanced Statistics
        </h1>
        <p className='px-[280px] text-[1.2rem] text-[var(--Grayish-Violet)] leading-9'>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>

          <div class="grid justify-center items-center text-start grid-cols-3 mt-[55px] gap-[30px]">

              <div class="pt-16 rounded overflow-hidden shadow-lg  bg-[var(--Off-white)]">
                  <div class="px-6 py-4">
                      <h3 class="font-bold text-[1.4rem] mb-2">Brand Recognition</h3>
                      <p class="text-[var(--Grayish-Violet)] text-base leading-7">
                          Boost your brand recognition with each click. Generic links don’t
                          mean a thing. Branded links help instil confidence in your content.
                      </p>
                  </div>
              </div>

              <div class="pt-16 rounded overflow-hidden shadow-lg bg-[var(--Off-white)] mt-[80px] ">
                  <div class="px-6 py-4">
                      <h3 class="font-bold text-[1.4rem] mb-2">Detailed Records</h3>
                      <p class="text-[var(--Grayish-Violet)] text-base leading-7">
                          Gain insights into who is clicking your links. Knowing when and where
                          people engage with your content helps inform better decisions.
                      </p>
                  </div>
              </div>

              <div class="pt-16 rounded overflow-hidden shadow-lg  bg-[var(--Off-white)] mt-[160px]">
                  <div class="px-6 py-4">
                      <h3 class="font-bold text-[1.4rem] mb-2">  Fully Customizable
                      </h3>
                      <p class="text-[var(--Grayish-Violet)] text-base leading-7">
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