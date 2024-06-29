import React from 'react'
import "../style/style.css"
import { FaPlusCircle } from "react-icons/fa";

const Explore = () => {
  return (
    <div className='explore-container'>
  <div className='explore-main'>
    <div className='add-btn'>
    <button className='addyouown' ><FaPlusCircle size={"30px"}/> </button>
    <h3>Add your own</h3>
    </div>

    <div className='explore-loruem'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nisi
        tortor, vel auctor urna dapibus a. Sed id viverra nisi. Fusce ultricies</p>
    </div>
    <button className='addnew-btn'>
        Add new
    </button>

  </div>


    </div>
  )
}

export default Explore