import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function TriggerScroll() {
  const sectionRef = useRef(null);
  const trigggerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".section-content",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-content",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".section-title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-title",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".section-div-img",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".section-div-img",
          toggleActions: "restart none none none",
          start: "center center",
          duration: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-220vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigggerRef.current,
          start: "top 20%",
          end: "2000 left",
          scrub: 0.6,
          invalidateOnRefresh: true,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="section-container">
      <div ref={trigggerRef}>
        <div ref={sectionRef} className="section-group">
          <div className="section">
            <div className="feature-title">
              FEATURED
              <br />
              WORK
            </div>
          </div>
          <div className="section">
            <div className="section-div-img">
              <img src="./motion-simulator.png" className="section-img" />
            </div>
          </div>
          <div className="section">
            <div className="section-title">F1 Motion Simulator</div>
            <br />
            <div className="section-content">
              The F1 Car Simulation Project aims to create an ultra-realistic
              Formula 1 racing simulation, bridging thd gap between virtual and
              real-world racing for enthusiasts, drivers, and teams.
            </div>
            <a href="" className="section-button">
              View Project
              <span className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="section">
            <div className="section-div-img">
              <img src="./hot-air-ballon.webp" className="section-img" />
            </div>
          </div>
          <div className="section">
            <div className="section-title">Hot Air Ballon</div>
            <br />
            <div className="section-content">
              The F1 Car Simulation Project aims to create an ultra-realistic
              Formula 1 racing simulation, bridging thd gap between virtual and
              real-world racing for enthusiasts, drivers, and teams.
            </div>
            <a href="" className="section-button">
              View Project
              <span className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="section">
            <div className="section-div-img">
              <img
                src="./witch-craft.webp"
                style={{ width: "350px" }}
                className="section-img"
              />
            </div>
          </div>
          <div className="section-last">
            <div className="section-title">Witch Craft</div>
            <br />
            <div className="section-content">
              The F1 Car Simulation Project aims to create an ultra-realistic
              Formula 1 racing simulation, bridging thd gap between virtual and
              real-world racing for enthusiasts, drivers, and teams.
            </div>
            <a href="" className="section-button">
              View Project
              <span className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12.25"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TriggerScroll;
