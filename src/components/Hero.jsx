import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {
  const [text] = useTypewriter({
    words: ["BTB","BTC","SAAS"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 140,
    delaySpeed: 2000,
  });

  return (
    <div className='text-white'>
        <div className=' max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'>
              GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              Grow with data. 
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-4xl font-bold py-4'>
                Fast, Flexible financing for {text}
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor='#00df9a'

                />
              </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
              Monitor your data analytics to increase revenue for BTB, BTC, SAAS platforms 
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero