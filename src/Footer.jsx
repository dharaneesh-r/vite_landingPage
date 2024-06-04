import React from 'react'
import './landing.css'
import Marquee from 'react-fast-marquee'
import { data } from './footer-info'

function Footer() {
    return (
      <div className="footer-container">
        <Marquee pauseOnHover>
          {data.map((data) => {
            return <div className="footer-heading">{data.heading}<span style={{paddingLeft : '15px'}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
          </svg></span></div>;
          })}
        </Marquee>
        <br />
        <div style={{paddingBottom : '20px'}}></div>
      </div>
    );
}

export default Footer