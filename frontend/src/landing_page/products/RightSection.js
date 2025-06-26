import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  link,
  learnMore,
}) {
  return (
    <div className="container p-5 m-5">
      <div className="row pt-5 mt-5 mx-5">
        <div className="col-5 px-5 pt-5 mt-5" style={{ lineHeight: "2rem" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {link}
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 pb-5 mb-5">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
