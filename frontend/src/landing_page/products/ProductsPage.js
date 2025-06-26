import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
        link1={
          <span>
            Try demo <i class="fa-solid fa-arrow-right"></i>
          </span>
        }
        link2={
          <span>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </span>
        }
      />

      <RightSection
        imageURL="media/images/products-console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/"
        link={
          <span>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </span>
        }
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
        link1={
          <span>
            Coin <i class="fa-solid fa-arrow-right"></i>
          </span>
        }
        link2=""
      />

      <RightSection
        imageURL="media/images/kiteconnectapi.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/"
        link={
          <span>
            Kite Connect <i class="fa-solid fa-arrow-right"></i>
          </span>
        }
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
        link1=""
        link2=""
      />

      <p className="fs-5 text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a href="/" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
