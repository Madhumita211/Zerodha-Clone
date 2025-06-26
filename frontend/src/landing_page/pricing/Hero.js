import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center text-muted mt-3 p-5">
        <h1 className="my-3" style={{ fontSize: "2.8rem" }}>
          Charges
        </h1>
        <p className="fs-5 mb-3">List of all charges and taxes</p>
      </div>

      <div className="row text-center text-muted mt-5 p-5">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/pricing-eq.svg"
            alt="pricing-eq"
            style={{ width: "70%" }}
          />
          <h2>Free equity delivery</h2>
          <p className="mt-4 text-muted" style={{ fontSize: "1.05rem" }}>
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/other-trades.svg"
            alt="other-trades"
            style={{ width: "70%" }}
          />
          <h2>Intraday and F&O trades</h2>
          <p className="mt-4 text-muted" style={{ fontSize: "1.05rem" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br />
            executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/pricing-eq.svg"
            alt="pricing-eq"
            style={{ width: "70%" }}
          />
          <h2>Free direct MF</h2>
          <p className="mt-4 text-muted" style={{ fontSize: "1.05rem" }}>
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>

      <div className="row text-muted mt-5 p-5">
        <h4 className="px-5">Charges explained</h4>

        <div className="col-6 px-5 mt-3" style={{ fontSize: "0.8rem" }}>
          <h6 className="my-4">Securities/Commodities transaction tax</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h6 className="my-4">Transaction/Turnover Charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h6 className="my-4">Call & trade</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h6 className="my-4">Stamp charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6 className="my-4">NRI brokerage charges</h6>
          <p className="my-4">
            <ul>
              <li style={{ lineHeight: "1.4rem" }}>
                ₹100 per order for futures and options.
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>

          <h6 className="my-4">Account with debit balance</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h6 className="my-4">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h6>
          <p className="my-4">
            <ul>
              <li style={{ lineHeight: "1.4rem" }}>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </p>

          <h6 className="my-4">Margin Trading Facility (MTF)</h6>
          <p className="my-4">
            <ul>
              <li style={{ lineHeight: "1.4rem" }}>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </p>
        </div>

        <div className="col-6 px-5 mt-3" style={{ fontSize: "0.8rem" }}>
          <h6 className="my-4">GST</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h6 className="my-4">SEBI Charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h6 className="my-4">DP (Depository participant) charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h6 className="my-4">Pledging charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>

          <h6 className="my-4">AMC (Account maintenance charges)</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>

          <h6 className="my-4">Corporate action order charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h6 className="my-4">Off-market transfer charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            ₹25 per transaction.
          </p>

          <h6 className="my-4">Physical CMR request</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <h6 className="my-4">Payment gateway charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>

          <h6 className="my-4">Delayed Payment Charges</h6>
          <p className="my-4" style={{ lineHeight: "1.4rem" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>

          <h6 className="my-4">
            Trading using 3-in-1 account with block functionality
          </h6>
          <p className="my-4">
            <ul>
              <li style={{ lineHeight: "1.4rem" }}>
                <b>Delivery & MTF Brokerage:</b> 0.5% per executed order.
              </li>
              <li style={{ lineHeight: "1.4rem" }}>
                <b>Intraday Brokerage:</b> 0.05% per executed order.
              </li>
            </ul>
          </p>
        </div>

        <div style={{ fontSize: "0.8rem" }} className="col-12 p-5">
          <h5 className="my-4">Disclaimer</h5>
          <p className="my-4">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
