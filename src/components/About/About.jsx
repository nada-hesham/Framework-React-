import React from 'react'

export default function About() {
  return <>
 <div className='bg-home w-100 vh-100'> 
<div className="container">
    <div>
        <h1 className='font-h2'>ABOUT COMPONENT</h1>
    </div>
    <div className='position-relative'>
        <div className='under-line-left'></div>
        <i className='fas fa-star text-white star-center'></i>
        <div className="under-line-right"></div>

    </div>
    <div className="row mt-5 text-white">
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
</div>
 </div>
  
  </>
}
