import React from 'react'
import heroImage from "../../assets/images/image.jpg"

const Hero = () => {
  return (
    <section className='py-[25px]'>
      <div className='max-w-[1370px] w-full mx-auto px-[20px]'>
        <div className='overflow-hidden rounded-[20px]'>
          <img 
            className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover rounded-[20px]' 
            src={heroImage} 
            alt="Hero"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
