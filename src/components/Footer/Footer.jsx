import React from 'react'

export default function Footer() {
  return <>
 <div className='footer-bg'>
 <div className="container pt-5 ">
    <div className="row ">
        <div className="col-md-4">
            <div className='p-4 d-flex justify-content-center align-items-center flex-column text-center '>
                <h3 className='h-footer'>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className='p-4 d-flex justify-content-center align-items-center flex-column text-center '>
                <h3 className='h-footer'>AROUND THE WEB</h3>
                <div className='mt-2'>
                  <span className='icons me-2 p-2'><i className='fa-brands fa-facebook text-white'></i></span>
                  <span className='icons me-2 p-2'><i className='fa-brands fa-twitter text-white'></i></span>
                  <span className='icons me-2 p-2'><i className='fa-brands fa-linkedin text-white'></i></span>
                  <span className='icons me-2 p-2'><i className='fa-solid fa-globe text-white'></i></span>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className=' d-flex justify-content-center align-items-center flex-column text-center '>
                <h3 className='h-footer mb-2'>ABOUT FREELANCER</h3>
                <div>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
                
            </div>
        </div>
    </div>
    
  </div>
 </div>
 <div className='footer'>
<p className='text-white'>Copyright © Your Website 2021</p>
 </div>
  </>
}
