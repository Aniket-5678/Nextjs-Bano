"use client"

import React from 'react'
import "../style/style.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='footer-main'>

          <div className='footer-link1'>
            <h3>Hobbycue</h3>
            <Link className='footer-link' href ='/'>Our Services</Link>
            <Link  className='footer-link' href ='/'>Work with Us</Link>
            <Link  className='footer-link' href ='/'>FAQ</Link>
            <Link  className='footer-link' href= '/'>Contact Us</Link>
            </div>  

            <div className='footer-link2'>
            <h3>How Do I</h3>
            <Link  className='footer-link' href='/'>Sign Up</Link>
            <Link  className='footer-link' href='/'>Add a Listings</Link>
            <Link  className='footer-link'  href='/'>Post a Query</Link>
            <Link   className='footer-link' href='/'>Add a Blog Post</Link>
            <Link  className='footer-link' href='/'>Other Queries</Link>
            </div>  


            <div className='footer-link3'>
            <h3>Quick Links</h3>
            <Link  className='footer-link' href='/'>Listings</Link>
            <Link  className='footer-link' href='/'>Blog Posts</Link>
            <Link   className='footer-link' href='/'>Shop / Store</Link>
            <Link  className='footer-link' href='/'>Community</Link>
     
            </div>  

            <div className='footer-end'>
        <p>© Purple Cues Private Limited</p>
       </div>
     
       </div>

    </div>
  )
}

export default Footer