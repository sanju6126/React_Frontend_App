import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      {/* //md:flex will be applied when the screen size is greater than that of Medium screen size other than that it will be hidden */}
      <ul className='md:flex hidden' >    
        {/* {nav ? setNav(!nav) : ""} */}
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden ' >
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {/* on clicking the --- button nav will get true and this big class name will be executed and it will take the menu from left side towards us .....if again it will be clicked nav variable will turn false and the second classname smaller one means else condition will be executed */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul> 
    </div>
  )
}

export default Navbar