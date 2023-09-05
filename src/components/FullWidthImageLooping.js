import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top center",
    ctaPejsciKAdopci = "Pejsci k adopci",
    ctaViceInformaci = "Zjistit více",
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
        {(title) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            {title && (
              <div>
                <h1
                  style={{
                    color: "white",
                    lineHeight: "1",
                    fontSize: "clamp(4rem, 8vw, 9rem)",
                    paddingBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  {title}
                </h1>
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                  }}
                >
                  <Link
                    className="custom-button"
                    to="/adopce"
                  >Pejsci k adopci
                  </Link>
                  <Link
                    className="custom-button-inverse"
                    to="/blog"
                  >Zjistit více
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
        {(
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >

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

