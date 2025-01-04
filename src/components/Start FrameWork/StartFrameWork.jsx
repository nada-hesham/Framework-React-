import React from 'react'
import img from '../../assets/avataaars.svg'
export default function StartFrameWork() {
  return <>
 <div className='vh-100 bg-home w-100'>
 <div className='container'>
    <div className='text-center mt-5'> 
        <img src={img} alt='home page' className='w-25 '></img>
    </div>
    <div>
        <h2 className='font-h2 mt-5'>START FRAMEWORK</h2>

    </div>
    <div className='position-relative'>
        <div className='under-line-left'></div>
        <i className='fas fa-star text-white star-center'></i>
        <div className="under-line-right"></div>

    </div>
    <div className='mt-5 p-font'>
        <p>Graphic Artist - Web Designer - Illustrator
        </p>
    </div>
  </div>
 </div>
  
  </>

}
