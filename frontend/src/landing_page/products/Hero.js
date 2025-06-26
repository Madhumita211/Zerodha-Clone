import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-2 mt-5">
      <div className="row text-center pb-5 border-bottom">
        <h1 className="my-2" style={{ fontSize: "2.9rem" }}>
          Zerodha Products
        </h1>
        <h2 className="fs-5 my-2">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="my-2 pb-5">
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
