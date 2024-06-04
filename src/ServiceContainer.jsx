import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Data } from "./ServiceData";

gsap.registerPlugin(ScrollTrigger);

function ServiceContainer() {
  useEffect(() => {
    gsap.fromTo(
      ".service-title",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".service-title",
          start: "center center",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".service-container",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".service-container",
          start: "center center",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <div>
      {Data.map((Data) => {
        return (
          <div className="service-container">
            <div className="service-image">
              <img src={Data.image} className="service-img" />
            </div>
            <div className="service-content">
              <div className="service-title">{Data.title}</div>
              <div className="service-provided">
                <p>{Data.service1}</p>
                <p>{Data.service2}</p>
                <p>{Data.service3}</p>
                <p>{Data.service4}</p>
                <p>{Data.service5}</p>
                <p>{Data.service6}</p>
                <p>{Data.service7}</p>
              </div>
            </div>
            <hr />
            <div style={{ paddingBottom: "30px" }}></div>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceContainer;

