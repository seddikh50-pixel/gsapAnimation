import React from 'react'

const HomeHeroText = () => {
  return (
    <div className='text-center '>
      <div className='text-[20vh] leading-[0.9] text-white font-[font1]'>
        THE SPARK FOR

      </div>
      <div className='text-[20vh] leading-[0.9] flex justify-center items-center text-white font-[font1]'>
        ALL
        <div className='w-72  rounded-full overflow-hidden h-32'>
          <video className='h-full w-full object-cover' autoPlay loop muted src="/cyber.mp4" />
        </div>
        THINGS
      </div>
      <div className='text-[20vh] leading-[0.9] text-white font-[font1]'>
        CREATIVE
      </div>
    </div>
  )
}

export default HomeHeroText