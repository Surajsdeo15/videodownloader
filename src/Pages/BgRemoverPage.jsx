import React from 'react';
import '../App.css';
import Navbar from '../Components/Important/Navbar';

function BgRemoverPage() {
  return (
   <>
   
  <div className='text-center background-container'>
  <Navbar/>
      <div>
      <h1 className=' relative -top-28 left-72 font-sans font-bold text-4xl text-pink-700'>Deo<span className='font-mono text-6xl text-orange-700'>Clip</span><span className=' font-sans '>Catcher</span></h1>
      </div>
     
      <input
        type='file'
        placeholder="Submit Your Image.........."
        value=''
        onChange=''
        className='relative md:-left-8 p-2 font-bold focus:outline-none rounded-lg text-pink-700 shadow-xl shadow-cyan-700 w-80 bg-transparent'
      
      />
     
      <button onClick='' disabled='' className='relative top-6 md:top-0 md:left-6  text-pink-700 font-medium shadow-xl bg-transparent rounded-xl p-1 pl-2 pr-2 z-50 shadow-cyan-700  '> REMOVE-BG
        {/* {loading ? 'Processing...' : 'Search Video'} */}
      </button>

      {/* {downloadLink && ( */}
        <div>
          <a href='' download>
            <button className='relative top-20 -left-96 w-44 h-10 text-pink-700 shadow-xl shadow-cyan-700 rounded-xl '> <i className="fi fi-sr-laptop-arrow-down text-orange-700 relative top-1 "></i> Download Image</button>
          </a>
        
        </div>
      {/* )} */}
    </div>
   
   </>
  )
}

export default BgRemoverPage