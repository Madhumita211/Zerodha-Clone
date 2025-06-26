import React from "react";

function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#387ed1",
        color: "white",
        padding: "100px 0 85px 0",
        paddingTop: "30px",
        position: "static",
        width: "100%",
      }}
    >
      <div className="container px-5">
        <div className="row mx-5">
          <div className="row p-3 mt-3 mb-3 d-flex justify-content-space-between">
            <div className="col-3">
              <h3 style={{ fontSize: "1.5rem" }}>Support Portal</h3>
            </div>
            <div className="col-7"></div>
            <div className="col-2">
              <span
                className="text-center border-bottom"
                style={{ fontSize: "1.2rem" }}
              >
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Track tickets
                </a>
              </span>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-7">
              <h4 className="mb-4">
                Search for an answer or browse help topics to create a <br />{" "}
                ticket
              </h4>
              <div
                className="input-group"
                style={{ width: "90%", height: "30%" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg. how do i activate F&O, why is my order getting rejected ..."
                />
                <button
                  className="btn btn-outline-transparent bg-white text-muted"
                  type="button"
                  id="button"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <br />
              <span
                className="text-center pb-1 border-bottom"
                style={{ fontSize: "1.1rem" }}
              >
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Track account opening
                </a>
              </span>
              <span
                className="text-center pb-1 border-bottom mx-3"
                style={{ fontSize: "1.1rem" }}
              >
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Track segment activation
                </a>
              </span>
              <span
                className="text-center pb-1 border-bottom"
                style={{ fontSize: "1.1rem" }}
              >
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Intraday margins
                </a>
              </span>
              <br />
              <span
                className="text-center pb-1 border-bottom"
                style={{ fontSize: "1.1rem" }}
              >
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Kite user manual
                </a>
              </span>
            </div>
            <div className="col-5">
              <h4 className="my-4">Featured</h4>
              <ol>
                <li style={{ fontSize: "1.1rem", textDecoration: "underline" }}>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Surveillance measure on scrips - June 2025
                  </a>
                </li>
                <br />
                <li style={{ fontSize: "1.1rem", textDecoration: "underline" }}>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Rights Entitlements listing in June 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
