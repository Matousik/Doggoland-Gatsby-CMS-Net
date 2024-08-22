import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import GoogleMap from "../../components/GoogleMap";
import mapIcon from "../../img/logo75px.png";
import "./kontakt.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const mapTitle = "Doggoland z.s.";
const markerPosition = { lat: 50.37150004740581, lng: 13.787847486233012 };

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
         <div className="presentation-container mild-cream">
      <div className="presentation-box">
        <h1 className="presentation-title">Sídlo spolku Doggoland z.s.</h1>
        <ul className="presentation-list">
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> Předsedkyně spolku: Daniela Jana Vondráková</li>
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> IČO: 11719222</li>
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> Tel.: <a href="tel:+420739071777">+420 739 071 777</a></li>
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> E-mail: <a href="mailto:info@doggoland.cz">info@doggoland.cz</a></li>
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> Adresa: Komenského 354, Dobroměřice, 440 01</li>
        </ul>
      </div>
      <div className="presentation-box">
        <h1 className="presentation-title">Můžete nás sledovat také na našich sociálních sítích</h1>
        <ul className="presentation-list">
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> Facebook: <a href="https://www.facebook.com/groups/650759782685550" target="_blank" rel="noopener noreferrer">DOGGOLAND z.s.</a></li>
          <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> Instagram: <a href="https://www.instagram.com/_doggoland_/" target="_blank" rel="noopener noreferrer">_doggoland_</a></li>
          {/* <li className="presentation-content"><FontAwesomeIcon icon={faCaretRight} className="bullet-icon" /> TikTok: <a href="https://www.tiktok.com/@_doggoland_" target="_blank" rel="noopener noreferrer">_doggoland_</a></li> */}
        </ul>
      </div>
    </div>
        <section>
        <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMap
        apiKey={apiKey}
        markerLatLng={markerPosition}
        markerTitle={mapTitle}
        markerIcon={mapIcon}
      />
    </div>
        </section>
      </Layout>
    );
  }
}
