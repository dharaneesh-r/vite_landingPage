import React from 'react'
import './landing.css'
import Page from './Page'
import Content from './Content'
import Service from './Service';
import Marquees from './Marquee';
import Insight from './Insight';
import Footer from './Footer';
import Footergrid from './Footergrid';
import Feature from './Feature';


function App() {
  return (
    <div>
      <div>
        <Page />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Service />
      </div>
      <div className="marquee-class">
        <Feature />
      </div>
      <div className="marquee-class">
        <Marquees />
      </div>
      <div>
        <Insight />
      </div>
      <div className='footerfooter'>
        <Footer />
        <Footergrid />
        <div style={{padding : '20px',backgroundColor : 'black',color : 'white',fontSize : '12px'}}>
          <div>&copy;2023 All Rights reserved  <span style={{float: 'right'}}>Privacy Policy</span></div>
        </div>
      </div>
    </div>
  );
}

export default App

