import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row p-5 mx-3">
        <div className="col-4 p-5">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-3 px-5"></div>
        <div className="col-5 p-5 mt-5" style={{ lineHeight: "2rem" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {link1}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "10%", textDecoration: "none" }}
            >
              {link2}
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="googlePlayBadge"
              />
            </a>
            <a
              href={appStore}
              style={{ marginLeft: "5%", textDecoration: "none" }}
            >
              <img src="media/images/appstoreBadge.svg" alt="appstoreBadge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
