import React from 'react';
import './CustomComponent.css';
import qr from "../img/qr-kod-bankovni-ucet.png";


const CustomComponent = () => {
  return (
    <div className="custom-component">
      <section className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                    <div className="content has-text-centered">
          <h2 className="title is-2">Přispějte!</h2>
          <p>Pomozte nám zachránit více pejsků a kočiček! Snažíme se pro naše svěřence dělat maximum, ale bez dostatku financí na veterinární péči, krmení, a další potřebné věci pro pejsky to nezvládneme. Pomoci nám můžete příspěvkem na náš transparentní účet č. <strong>2302170901/2010</strong>. Každá koruna se počítá!</p>
          <img
            src={qr}
            alt="QR code placeholder"
            className="qr-placeholder"
          />
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomComponent;