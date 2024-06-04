import React, { useEffect } from "react";
import "./landing.css";
import { gsap } from "gsap";
import video from '../src/videos/video5.mp4'



function Page() {
  useEffect(() => {
gsap.fromTo('.description_content', {
  opacity : 0,
  y : 400,
},
 {
  opacity : 1,
  y : 0,
  duration : 1.5,
  delay : 2,
  stagger : {
    each : 0.5,
  },
},
); 
  },[])
  return (
      
      <div style={{height : '100%', width: '100%'}}>
        <video  style={{marginTop: '-10px'}} className="image-container" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="description">
          <p className="description_content"> 
            Discover the stories <br />
            <span className="description_content">Behind Top</span> <br />
            <span className="description_content">Notch Innovation</span>
          </p>
        </div>
      </div>
      
  );
}

export default Page;
