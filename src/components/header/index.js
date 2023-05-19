import React from 'react'
import HeaderBox from './header'

export default function HeaderFunction() {
  return (
    <HeaderBox>
        <div className="top">
            <div className={`left text-light`}>
                <h1>Become a Vanilla <br /> JavaScript Developer</h1>
                <p>In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for <br /> building incredible, powerful JavaScript applications.</p>
                <p>4 Hours</p>
                <p>12 Videos</p>
                <p>10,234+ Enrolled</p>
                <button className='pt-2 pb-2 ps-1 pe-1 rounded-4 bg-success text-light border-0'>Watch preview</button>
            </div>
            <div className="right">
                <div className="content text-light">
                    <h3>Create Free Account</h3>
                    <div className="buttonBox mt-3 mb-3">
                        <button>Google</button>
                        <button>Twitter</button>
                        <button>Facebook</button>
                    </div>
                    <div className="inputBox mt-3 mb-5">
                        <input className='pt-2 pb-2' type="text" placeholder='Email' />
                        <input className='pt-2 pb-2' type="Password" placeholder='Password' />
                        <button className='pt-2 pb-2 border-0'>Start Courses for Free</button>
                    </div>
                    <p>By continuing you accept the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a>, and <a href="#">Data Policy</a></p>
                </div>
            </div>
        </div>

        <div className="bottom d-flex text-light justify-content-between ps-5 pe-5">
            <p>Shareable Certificate</p>
            <p>Flexible Deadlines</p>
            <p>100% Online Courses</p>
            <p>Approx.24 hours</p>
        </div>
    </HeaderBox>
  )
}
