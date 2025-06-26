import React from "react";

function Universe() {
  return (
    <div className="container mt-5 px-5">
      <div className="row text-center p-5">
        <h1 className="mt-5 mb-4" style={{ fontSize: "2.1rem" }}>
          The Zerodha Universe
        </h1>
        <p style={{ fontSize: "1.1rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodha fund house"
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "0.8rem" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibull-logo.svg"
            alt="sensibull"
            style={{ width: "65%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.8rem" }}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/tijori.svg"
            alt="tijori"
            style={{ width: "40%" }}
          />
          <p className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "0.8rem" }}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase logo"
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.8rem" }}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="/media/images/dittoLogo.png"
            alt="ditto-logo"
            style={{ width: "40%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.8rem" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-3 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
