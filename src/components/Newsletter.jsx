import React from 'react'

function Newsletter() {
  return (
    <div className='w-full text-white py-16 px-4'>
        {/* large screen pe 3 columns ho jao */}
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold'>Want tips and tricks to optimize your flow?</h1>
                <p>sign up to our newsletter and stay up to date</p>
            </div>
            <div className=' my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email"/>
                    <button className='w-[200px] bg-[#00df9a] text-black rounded-md font-bold ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>We care about protection of your data.</p>
                <p> Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>

        </div>

    </div>
  )
}

export default Newsletter