

import "../app/components/style/style.css"
import Community from "./components/pages/Community";
import Explore from "./components/pages/Explore";
import Frame from "./components/pages/Frame";
import SignIn from "./components/pages/SignIn";
import Testimonial from "./components/pages/Testimonial";



export default function Home() {
  return (
 <div className="home-container" >
    <SignIn/>
     <Frame/> 
     <Explore/>
     <Testimonial/>
     <Community/>
 </div>
  );
}
