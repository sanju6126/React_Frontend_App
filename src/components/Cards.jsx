import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


function Cards() {
  return (
    <div className='w-full py-[10rem] bg-white px-4' > 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold' >$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Send upto 2GB</p>
                </div>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>

            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col md:my-0 my-8 p-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3.3rem] bg-transparent' src={Double} alt="" />
                <h2 className='text-2xl font-bold py-8 text-center'>Double User</h2>
                <p className='text-4xl font-bold text-center'>$499</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>5 Granted User</p>
                    <p className='border-b py-2 mx-8'>1299 GB Storage</p>
                    <p className='border-b py-2 mx-8 '>Send upto 8 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 '>Start Trial</button>
            </div>
            <div className=' w-full shadow-xl flex flex-col bg-white rounded-lg my-4 p-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3.8rem] bg-white' src={Triple} alt="" />
                <h2 className='text-2xl font-bold py-8 text-center'>Triple User</h2>
                <p className='text-4xl font-bold text-center'>$999</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>15 Granted User</p>
                    <p className='border-b py-2 mx-8 '>1999 GB Storage</p>
                    <p className='border-b py-2 mx-8 '>Send upto 15 GB</p>
                </div>
                <button className='w-[200px] bg-[#00df9a] text-black font-medium rounded-md mx-auto my-6 py-3 px-6 '>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards