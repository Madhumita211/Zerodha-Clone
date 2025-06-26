import React from "react";

function Team() {
  return (
    <div className="container mx-5 px-5">
      <div className="row pb-5 mt-3 mb-3">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row px-5 mx-5 text-muted">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="pt-4">Nithin Kamath</h5>
          <h6 className="pt-2">Founder, CEO</h6>
        </div>
        <div
          className="col-6"
          style={{ lineHeight: "1.7", fontSize: "1.1rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
