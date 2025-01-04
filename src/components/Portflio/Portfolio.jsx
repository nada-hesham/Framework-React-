import React from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portfolio() {

  return <>
 
  <div className="vh-100 mt-5 ">
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <div>
        <div className="h1-portfolio py-5">
            <h1>PORTFOLIO COMPONENT</h1>
            <div className='position-relative'>
          <div className='line-left'></div>
             <i className='fas fa-star  star-center-portfolio'></i>
             <div className="line-right"></div>
            </div>
        </div>
        </div>
        <div >
       <div className="row g-5 ">
            <div className="col-lg-4 col-md-6 col-img  ">
              <div className='position-relative overflow-hidden'> 
                <img src={img1} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0 ">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
              
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img2} alt="" className='img rounded-3 ' /> 
               <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
                </div>
               
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden '>
                <img src={img3} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0">
               <i className="fa-solid fa-plus fa-6x text-white "></i>
               </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
              <div className='position-relative overflow-hidden'>
                 <img src={img1} alt="" className='img rounded-3 ' />
                 <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                 </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img2} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img3} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
            </div>
        </div>
     </div>
    
    </div>
   
   
  
  </div>
  </>
}
