import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top center",
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const blurbsArray = img || [];
  console.log(blurbsArray);
  const images = blurbsArray.map((b) => b.image.childImageSharp.gatsbyImageData);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const renderImage = (img, index) => {
    return (
      <GatsbyImage
        key={index}
        image={img}
        objectFit={"cover"}
        objectPosition={imgPosition}
        style={{
          gridArea: "1/1",
          height: height,
          opacity: index === currentIndex ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
        layout="fullWidth"
        aspectratio={3 / 1}
        alt=""
        formats={["auto", "webp", "avif"]}
      />
    );
  };

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {images.map((img, index) => renderImage(img, index))}
        {(title || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  blurbs: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};

