import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex items-center shadow-lg backdrop-blur-[3px] backdrop- justify-between px-6 py-2 z-[100] w-full absolute'>
        <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>CLONE</h1>
        <div>
            <button className='pr-8 py-4'>Login</button>
            <button className='bg-red-500 px-6 py-2 rounded-sm'>SignIn</button>
        </div>
    </div>
  )
}

export default Navbar