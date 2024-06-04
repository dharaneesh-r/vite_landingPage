import React from 'react'
import Marquee from 'react-fast-marquee'
import { data } from './MarqueeData'
function Marquees() {
  return (
    
    <div>
      <div className='marquee-title'>Clients who trust us</div>
      <hr />
    <Marquee pauseOnHover>
      {data.map((data) => {
        return (
              <div className='marquee-container'>
                <img className="marquee-image" src={data.image} />
              </div>
        );
      })}
      </Marquee>
      <Marquee pauseOnHover direction='right'>
      {data.map((data) => {
        return (
              <div className='marquee-container'>
                <img className="marquee-image" src={data.image} />
              </div>
        );
      })}
      </Marquee>
      <Marquee pauseOnHover>
      {data.map((data) => {
        return (
              <div className='marquee-container'>
                <img className="marquee-image" src={data.image} />
              </div>
        );
      })}
      </Marquee>
    </div>
  );
}

export default Marquees