import React, { useEffect } from "react";
import "./landing.css";
import Insighttable from "./Insighttable";

function Insight() {
  return (
    <div className="insight-container">
      <div className="insight-heading">Insights</div>
      <hr />
      <Insighttable />
      <div className="view-all-insight">
        <a href="" className="text-all-insight">
        <span style={{paddingRight : '5px',paddingTop : '2px'}}><svg xmlns="http://www.w3.org/2000/svg" height="15" width="20" viewBox="0 0 448 512"><path fill="#407d92" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
          View all Insights
        </a>
      </div>
    </div>
  );
}

export default Insight;
