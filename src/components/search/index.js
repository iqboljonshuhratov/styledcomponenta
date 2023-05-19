import React from "react";
import MainBox from "./search";

export default function SearchFunction() {
  return (
    <MainBox class="conteiner-lg">
        <div className={`text text-light`}>
            <span>COURSE DESCRIPTION</span>
            <h1>What will you learn?</h1>
            <p>Vanilla JS is a fast, lightweight, cross-platformframework for building <br /> incredible, powerful JavaScript applications.</p>
        </div>
      <div class="row gap-2 justify-content-center mb-3">
        <div class="col-sm-9 col-lg-5 ">
          <div class="card bg-info-subtle">
            <div class="card-body rounded" id={`bg`}>
              <span class="d-flex justify-content-between">
                <img
                  src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"
                  alt=""
                />
                <div class="content">
                  <h5 class="card-title">Introduction to JavaScript</h5>
                  <p>COURSES - 1 6 LESSONS 1 HOUR 12 MIN</p>
                </div>
              </span>
              <p class="card-text">
                In et tempus dui, in porta dolor. Donec molestie a purus ut
                interdum. Donec quis felis dignissim, luctus libero ornare
              </p>
              <a href="#" class="card-link">
                View Chapter Details +
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-lg-5">
          <div class="card bg-info-subtle">
            <div class="card-body rounded" id={`bg`}>
              <span class="d-flex justify-content-between">
                <img
                  src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"
                  alt=""
                />
                <div class="content">
                  <h5 class="card-title">Introduction to JavaScript</h5>
                  <p>COURSES - 1 6 LESSONS 1 HOUR 12 MIN</p>
                </div>
              </span>
              <p class="card-text">
                In et tempus dui, in porta dolor. Donec molestie a purus ut
                interdum. Donec quis felis dignissim, luctus libero ornare
              </p>
              <a href="#" class="card-link">
                View Chapter Details +
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-lg-5">
          <div class="card bg-info-subtle">
            <div class="card-body rounded" id={`bg`}>
              <span class="d-flex justify-content-between">
                <img
                  src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"
                  alt=""
                />
                <div class="content">
                  <h5 class="card-title">Introduction to JavaScript</h5>
                  <p>COURSES - 1 6 LESSONS 1 HOUR 12 MIN</p>
                </div>
              </span>
              <p class="card-text">
                In et tempus dui, in porta dolor. Donec molestie a purus ut
                interdum. Donec quis felis dignissim, luctus libero ornare
              </p>
              <a href="#" class="card-link">
                View Chapter Details +
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-lg-5">
          <div class="card bg-info-subtle">
            <div class="card-body rounded" id={`bg`}>
              <span class="d-flex justify-content-between">
                <img
                  src="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"
                  alt=""
                />
                <div class="content">
                  <h5 class="card-title">Introduction to JavaScript</h5>
                  <p>COURSES - 1 6 LESSONS 1 HOUR 12 MIN</p>
                </div>
              </span>
              <p class="card-text">
                In et tempus dui, in porta dolor. Donec molestie a purus ut
                interdum. Donec quis felis dignissim, luctus libero ornare
              </p>
              <a href="#" class="card-link">
                View Chapter Details +
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainBox>
  );
}
