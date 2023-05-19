import React from "react";
import Instructor from "./instructor";

export default function InstructorFunction() {
  return (
    <Instructor className="d-flex">
      <div className="left text-light">
        <div className="top">
          <span>YOUR INSTRUCTOR</span>
          {/* #f59e0b */}
          <h1>
            Hi, I’m James Davies, <br />
            I will be taking you <br /> through lessons.
          </h1>
          <p>
            Create beautiful website with this Geeks <br /> UI template. Get
            started building a site <br /> today.
          </p>
        </div>

        <div className="bottom">
          <div className="text">
            <h1>45</h1>
            <p>Lessons</p>
          </div>
          <div className="text">
            <h1>10,500+</h1>
            <p>students</p>
          </div>
          <div className="text">
            <h1>12+</h1>
            <p>Lessons</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg"
          alt=""
        />
      </div>
    </Instructor>
  );
}
