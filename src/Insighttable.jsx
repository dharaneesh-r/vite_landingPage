import React from 'react'
import './landing.css'
import { Insight} from './Insightdata'

function Insighttable() {
  return (
    <div>
      {Insight.map((data) => {
        return (
          <div className="insight-features">
            <div className="insight-group-image">
              <img src={data.image} className="insight-image" />
              <p className="insight-title">
                {data.title}
                <span className="spanicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="22"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        );
      })}
      <div className='insight-last-container'>
        <img src="./corona_in_virus.png" className="insight-image-last" />
        <p className="insight-title-last">
          Hands of Coronavirus in Cyber
          <span className="spanicon-last">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="22"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
                    />
                  </svg>
                </span>
        </p>
      </div>
    </div>
  );
}

export default Insighttable

