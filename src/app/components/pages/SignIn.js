import Link from 'next/link'
import React from 'react'
import { IoIosLock } from "react-icons/io";


const SignIn = () => {
  return (
    <div className='signin-container'>
        
         <div className='signin-content'>
            <h2>Explore your  <span className="highlight-hobby">hobby</span> or <span className="highlight-passion">passion</span></h2>
            <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
         
 <div>
 <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride </p>

 </div>
            
            <img src='signin.svg' alt='users' />
        </div>  
   

      {/* signin */}
      <div  className='signin-form-main'>
            <div className='sign-link'>
                <Link className='nav' href='/'>Sign In</Link>
                <Link  className='nav' href='/'>join In</Link>
            </div>

            <form className='form-main'>
                <div className='google'>
                <img src='https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' height={"50px"} alt='google' />
                <h3>continue with Google</h3>
                </div>
                 
                <div className='facebook'>
                <img src='https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png' height={"50px"} alt='google' />
                <h3>continue with Facebook</h3>
                </div>
                
                <div className='connect-with'>
                    <h4>or connect with</h4>
                </div>

             <div className='form-input'>
                <input type='email'  placeholder='Email'/>
                <input type='password'  placeholder='Password'/>
             </div>
                
         <div className='check-box-main'>
            <div className='check'> 
            <input type='checkbox'    />
            <p>Remember me</p>
            
            </div>
             
             <div className='foreget'>
                <p><IoIosLock/> Forget Password?</p>
             </div>

         </div>

 <div className='continue-btn'>
    <button>continue</button>
 </div>
        </form>
        

      </div>

    </div>
  )
}

export default SignIn