import React from "react";
import TestBox from "./test";

export default function TestFunction() {
  return (
    <TestBox>
      <div className="text-box text-light">
        <span>TESTIMONIALS</span>
        <h1>What our learners are saying</h1>
        <p>12+ million people are already learning on Geeks</p>
      </div>
      <div className="card-box">
        <div className={`row text-light`}>
        <div className="col-sm-9 col-lg-5 rounded" id="coll">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipi <br /> scing elit. Sed vel
            felis imperdiet, lacinia metus <br /> malesuada diamamus rutrum turpis leo,
            id <br /> tincidunt magna sodales.
          </h5>
          <div className="name">
            <h4>Barry Watson</h4>
            <p>Web Developer,UK</p>
          </div>
        </div>
        <div className="col-sm-9 col-lg-5 rounded" id="coll">
          <h5>
          Lorem ipsum dolor sit amet, consectetur adipi <br /> scing elit. Sed vel
            felis imperdiet, lacinia metus <br /> malesuada diamamus rutrum turpis leo,
            id <br /> tincidunt magna sodales.
          </h5>
          <div className="name">
            <h4>Barry Watson</h4>
            <p>Web Developer,UK</p>
          </div>
        </div>
        </div>
      </div>
    </TestBox>
  );
}
