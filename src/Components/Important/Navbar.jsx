import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className=' fixed -top-[-5px] left-[-1px] rounded-2xl  w-2/3 h-9 shadow-2xl shadow-black bg-gradient-to-b from-indigo-300 translate-x-[500px]'>

                <div className='flex justify-between pl-4 pt-1  '>

                 <Link to='/'>   <div className='text-xl relative left-8 font-medium font-mono text-cyan-900 shadow-2xl shadow-black rounded-xl cursor-pointer hover:underline'>
                        HOME</div></Link>
                     
                     <Link to='/bg-remover-images'>  <div className='text-xl font-medium font-mono text-cyan-900 shadow-2xl shadow-black rounded-xl cursor-pointer hover:underline'>
                        BG-REMOVER</div> </Link> 

                        <div className='text-xl font-medium font-mono text-cyan-900 shadow-2xl shadow-black rounded-xl cursor-pointer hover:underline'>
                        FILES-CONVERTER</div>

                        <div className=' relative right-12 text-xl font-medium font-mono text-cyan-900 shadow-2xl shadow-black rounded-xl cursor-pointer hover:underline'>
                        TOOLS</div>



                </div>


            </div>

        </>
    )
}

export default Navbar