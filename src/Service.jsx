import React from 'react'
import ServiceContainer from './ServiceContainer'

function Service() {

  return (
    <div>
      <div style={{ padding: "0px 10%" }}>
        <div className="heading-service">Service</div>
        <hr />
        <div className='servicecontainer'>
      <ServiceContainer />
      </div>
      </div>
    </div>
  );
}

export default Service