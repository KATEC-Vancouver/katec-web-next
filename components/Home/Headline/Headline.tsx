import React from 'react'
import Image from 'next/image'

const Headline = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            {/* Top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-green-400 md:text-base sm:text-sm text-xs text-white">
                Join
              </div>
              <p className="text-xs sm:text-sm">여러분을 카텍의 맴버로 초대합니다!</p>
            </div>
            {/* Title */}
            <h1
            data-aos="fade-up" 
            className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
              The KATEC is The communiy of Korean Developers that has everything you need.
            </h1>
            {/* Description */} 
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic,
              alias molestiae illo suscipit, iure perferendis tempore totam, atque
              ipsam quaerat. Ex inventore veritatis at omnis quam ipsa perferendis
              tempore.
            </p>
          </div>
          {/* Right */}
          <div data-aos="fade-up" data-aos-delay='200' className="hidden lg:block">
            <Image src="/images/image1.png" width={700} height={700} alt="hero" />
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Headline
