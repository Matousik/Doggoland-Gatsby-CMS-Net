import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import "./masonry.css";

const FeatureGrid = ({ gridItems }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(null);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      setActiveImageIndex(null);
    }
  };

  const handleNextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % gridItems.length);
  };

  const handlePreviousImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + gridItems.length) % gridItems.length);
  };

  const handleKeyDown = (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback(event);
    }
  };

  return (
    <>
      <div className="masonry">
        {gridItems.map((item, index) => (
          <div
            key={`masonry-item-${index}`}
            className="masonry-item"
            onClick={() => handleImageClick(index)}
            onKeyDown={(event) => handleKeyDown(event, () => handleImageClick(index))}
            role="button"
            tabIndex={0}
          >
            <div className="has-text-centered">
              <div style={{ width: "100%", display: "inline-block" }}>
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeImageIndex !== null && (
        <div
          className="image-detail"
          onClick={handleClose}
          onKeyDown={(event) => handleKeyDown(event, handleClose)}
          role="button"
          tabIndex={0}
          style={{ height: "100vh" }}
        >
          <div className="image-container">
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <button className="arrow left-arrow" onClick={handlePreviousImage}>
              &larr;
            </button>
            <PreviewCompatibleImage
              imageInfo={gridItems[activeImageIndex]}
              containerStyle={{
                width: "100%",
                height: "100%",
                maxWidth: "75vw",
                maxHeight: "100vh",
              }}
            />
            <button className="arrow right-arrow" onClick={handleNextImage}>
              &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
