import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-muted m-5 px-5">
        <h4>Charges for account opening</h4>
        <table className="m-3 p-3">
          <thead className="border" style={{ lineHeight: "2.5rem" }}>
            <tr>
              <th className="mx-3 px-3">Type of Account</th>
              <th className="mx-3 px-3">Charges</th>
            </tr>
          </thead>

          <tbody className="border mx-3 px-3" style={{ lineHeight: "2.5rem" }}>
            <tr>
              <td className="mx-3 px-3">Online account</td>
              <td className="mx-5 px-3">
                <span
                  className="py-1 px-2"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td className="mx-3 px-3">Offline account</td>
              <td className="mx-5 px-3">
                <span
                  className="py-1 px-2"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td className="mx-3 px-3">NRI account (offline only)</td>
              <td className="mx-3 px-3">₹ 500</td>
            </tr>
            <tr>
              <td className="mx-3 px-3">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="mx-3 px-3">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row text-muted m-5 p-5">
        <h4>Charges for optional value added services</h4>
        <table className="m-3 p-3">
          <thead className="border" style={{ lineHeight: "2.5rem" }}>
            <tr>
              <th className="mx-3 px-3">Service</th>
              <th className="mx-3 px-3">Billing Frquency</th>
              <th className="mx-3 px-3">Charges</th>
            </tr>
          </thead>

          <tbody className="border mx-3 px-3" style={{ lineHeight: "2.5rem" }}>
            <tr>
              <td className="mx-3 px-3">Tickertape</td>
              <td className="mx-3 px-3">Monthly / Annual</td>
              <td className="mx-3 px-3">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td className="mx-3 px-3">Smallcase</td>
              <td className="mx-3 px-3">Per transaction</td>
              <td className="mx-3 px-3">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td className="mx-3 px-3">Kite Connect</td>
              <td className="mx-3 px-3">Monthly</td>
              <td className="mx-3 px-3">Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
