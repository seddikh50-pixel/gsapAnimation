import React from 'react'
import Video from './Video'
import HomeHeroText from './HomeHeroText'
import HomeBottomText from './HomeBottomText'

const HomePage = () => {
  return (
    <div >
      <div className='h-screen w-screen  fixed  '>
        <Video/>
      </div>
      <div className='h-screen w-screen  relative flex flex-col justify-between p-3 '>
      <HomeHeroText/>
      <HomeBottomText/>
      </div>
    </div>
  )
}

export default HomePage