import React from 'react';
import './CustomComponent.css';

const CustomComponent = () => {
  return (
    <div className="custom-component">
      <div className="content has-text-centered">
        <h2 className="title is-2">Přispějte!</h2>
        <img
          src="https://via.placeholder.com/200"
          alt="QR code placeholder"
          className="qr-placeholder"
        />
      </div>
    </div>
  );
};

export default CustomComponent;