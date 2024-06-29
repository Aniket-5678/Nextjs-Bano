import React from 'react'
import { IoIosPeople } from "react-icons/io";
import "../style/style.css"
import { MdPlace } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import { SiNike } from "react-icons/si";
import { FaPlusCircle } from "react-icons/fa";

const Frame = () => {
  return (
    <div className='frame-container'>

 <div className='frame-content'>
     
     <div className='frame-list'>
       
       <h3><IoIosPeople size={"25px"} color='grey'/>    People</h3>   
       <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator</p>
     <button className='connect-btn'>connect </button>
     </div>

     <div className='frame-list'>
       
       <h3><MdPlace size={"25px"} color='#77933C'/>    Place</h3>   
       <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
     <button className='connect-btn'>connect </button>
     </div>


     <div className='frame-list'>
       
       <h3><GiBeachBag size={"25px"} color='#C0504D'/>    Product</h3>   
       <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members</p>
     <button className='connect-btn'>connect </button>
     </div>

     <div className='frame-list'>
       
       <h3><SiNike size={"25px"} color='#0096C8'/>    Program</h3>   
       <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
     <button className='connect-btn'>connect </button>
     </div>



 </div>



    </div>
  )
}

export default Frame