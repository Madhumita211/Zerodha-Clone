import React from "react";

function Pricing() {
  return (
    <div className="container p-1 my-5">
      <div className="row mx-3">
        <div className="col-4 m-5">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/kite-demo" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 d-flex flex-wrap justify-content-center gap-5">
          <div className="col d-inline-flex">
            <img
              src="media/images/pricing-eq.svg"
              alt="pricing-eq"
              style={{ width: "60%" }}
            />
            <div
              className="mt-5 text-muted pt-5"
              style={{
                position: "relative",
                left: "-25px",
                top: "25px",
                fontSize: "12px",
              }}
            >
              Free account opening
            </div>
          </div>

          <div className="col d-inline-flex">
            <img
              src="media/images/pricing-eq.svg"
              alt="pricing-eq"
              style={{ width: "60%" }}
            />
            <div
              className="mt-5 text-muted pt-5"
              style={{
                position: "relative",
                left: "-25px",
                top: "15px",
                fontSize: "11px",
              }}
            >
              Free equity delivery and direct mutual funds
            </div>
          </div>

          <div className="col d-inline-flex">
            <img
              src="media\images\other-trades.svg"
              alt="other-trades"
              style={{ width: "60%" }}
            />
            <div
              className="mt-5 text-muted pt-5"
              style={{
                position: "relative",
                left: "-15px",
                top: "25px",
                fontSize: "12px",
              }}
            >
              Intraday and F&O
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
