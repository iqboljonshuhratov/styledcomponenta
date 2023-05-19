import React from "react";
import Money from "./money";

export default function MoneyFunction() {
  return (
    <Money className="p-5 mt-5">
      <div className="text-box text-light text-center">
        <span>NEED TO KNOW</span>
        <h1>Frequently Asked Questions.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non
          accumsan <br /> in, tempor dictum neque.
        </p>
      </div>

      <div className="Button-box">
        <button>Start Learning for Free</button>
        <button>Geeks for Business</button>
      </div>
    </Money>
  );
}
