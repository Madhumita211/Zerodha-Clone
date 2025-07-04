import React from "react";

function Education() {
  return (
    <div className="container p-1 my-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img
            src="media\images\education.svg"
            alt="index-education"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-6 p-1 my-5">
          <h1 className="fs-2 my-5">Free and open market education</h1>

          <p className="text-muted fs-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/products" style={{ textDecoration: "none" }}>
            Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-muted my-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/products" style={{ textDecoration: "none" }}>
            TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
