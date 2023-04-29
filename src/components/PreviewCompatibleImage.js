import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo, containerStyle }) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <div style={containerStyle}>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          style={imageStyle}
          alt={alt}
        />
      </div>
    );
  } else if (!!childImageSharp) {
    return (
      <div style={containerStyle}>
        <GatsbyImage
          image={childImageSharp.gatsbyImageData}
          style={imageStyle}
          alt={alt}
        />
      </div>
    );
  } else if (image) {
    return <img style={imageStyle} src={image} alt={alt}  objectFit={"contain"} />;
  } else {
    return null;
  }
};
 
PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
  containerStyle: PropTypes.object,
};

export default PreviewCompatibleImage;
