import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

export default function Contact() {
  // let {text ,textUp } = useState('')
  //   createRoot(document.getElementById("UserName"))
  
  
  return <>
  <div className="vh-100 p-5 mt-5 ">
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <div>
           <div className="h1-portfolio p-5">
            <h1>CONATCT SECTION</h1>
            <div className='position-relative'>
             <div className='line'></div>
             <i className='fas fa-star  star-center-portfolio'></i>
             <div className="line-right"></div>

            </div>
          </div>
        </div>
        
        <div>
          <div className="row text-center">
            <div className="col-md-12 mt-4 position-relative">
            <label htmlFor='UserName'> UserName :</label>
               <input type="text" name='UserName' className='form-controal input-w  border-bottom ' placeholder='UserName'   />
            </div>
            <div className="col-md-12 mt-4 position-relative ">
            <div><label htmlFor='UserAge'> UserAge :</label></div>
              <input type="number" name='UserAge' className='form-controal input-w  border-bottom' placeholder='UserAge' />
            </div>
            <div className="col-md-12 mt-4 position-relative">
            <div><label htmlFor='email'> UserEmail :</label></div>
              <input type="email"  name='email' className='form-controal input-w  border-bottom' placeholder='UserEmail' />
            </div>
            <div className="col-md-12 mt-4 position-relative">
            <div><label htmlFor='password'> UserPassword :</label></div>
              <input type="password" name='password'  className='form-controal input-w  border-bottom' placeholder='UserPassword' />
            </div>
            <div className="col-md-12 mt-4">
          <button className='py-2 text-white mt-4 btn-send '> Send Message</button>
           </div>
          </div>
        </div>
        
    </div>  
    </div>
  </>
}
