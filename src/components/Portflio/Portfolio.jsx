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
              <div className='position-relative overflow-hidden' data-bs-toggle="modal" data-bs-target="#img1"> 
                <img src={img1} alt="" className='img rounded-3 '  />
                
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0 ">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
              
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img2} alt="" className='img rounded-3 ' /> 
               <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0" data-bs-toggle="modal" data-bs-target="#img1">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
                </div>
               
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden '>
                <img src={img3} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0 " data-bs-toggle="modal" data-bs-target="#img1">
               <i className="fa-solid fa-plus fa-6x text-white "></i>
               </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
              <div className='position-relative overflow-hidden'>
                 <img src={img1} alt="" className='img rounded-3 '/>
                 <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0"  data-bs-toggle="modal" data-bs-target="#img1">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                 </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img2} alt="" className='img rounded-3 '  />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0" data-bs-toggle="modal" data-bs-target="#img1">
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-img ">
               <div className='position-relative overflow-hidden'>
                <img src={img3} alt="" className='img rounded-3 ' />
                <div className="layer rounded-3 d-flex justify-content-center align-items-center start-0 w-100 h-100 top-0" data-bs-toggle="modal" data-bs-target="#img1" >
               <i className="fa-solid fa-plus fa-6x text-white"></i>
               </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  </div>
          {/* <!-- Modal --> */}
          {/* <div classname="modal fade" id="img1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div classname="modal-dialog">
    <div classname="modal-content">
      <div classname="modal-header">
        <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div classname="modal-body">
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>
  </div>
</div> */}



  </>
}
