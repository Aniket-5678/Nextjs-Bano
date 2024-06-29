import React from 'react'
import "../style/style.css"

const Testimonial = () => {
  return (
    <div className='test-container'>
     
     <div className='tes-list'>
       
       <div className='test-first'>
        <div className='vector'>
        <img src='vector.svg' alt='vector' />
        <h3>Testimonials</h3>
        </div>
           
            <p>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </p>

       </div>

       <div className='test-img'>
        <div className='first-test-img'>
        <img src='Audio.svg' height={"100px"} />
        </div>
        <div className='second-svg'>
            <img src='second.svg'  height={"100px"}/>
        </div>
   

       </div>

     </div>


    </div>
  )
}

export default Testimonial