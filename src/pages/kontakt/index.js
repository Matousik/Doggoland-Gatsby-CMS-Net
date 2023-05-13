import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import GoogleMap from "../../components/GoogleMap";
import mapIcon from "../../img/logo75px.png";
import "./kontakt.css";



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
                <div className="presentation-container">
      <div className="presentation-box">
        <h1 className="presentation-title">Sídlo spolku Doggoland z.s.</h1>
        <p className="presentation-content">Předsedkyně spolku: Daniela Jana Vršková</p>
        <p className="presentation-content">IČO: 11719222</p>
        <p className="presentation-content">Tel.: +420 739 071 777</p>
        <p className="presentation-content">E-mail: <a href="mailto:info@doggoland.cz">info@doggoland.cz</a></p>
        <p className="presentation-content">Adresa: Komenského 354, Dobroměřice, 440 01</p>
      </div>
      <div className="presentation-box">
        <h1 className="presentation-title">Můžete nás sledovat také na našich sociálních sítích</h1>
        <p className="presentation-content">Facebook: <a href="https://www.facebook.com/Doggolandz.s" target="_blank" rel="noopener noreferrer">DOGGOLAND z.s.</a></p>
        <p className="presentation-content">Instagram: <a href="https://www.instagram.com/_doggoland_" target="_blank" rel="noopener noreferrer">_doggoland_</a></p>
        <p className="presentation-content">TikTok: <a href="https://www.tiktok.com/@_doggoland_" target="_blank" rel="noopener noreferrer">_doggoland_</a></p>
      </div>
    </div>
        <section className="section">
          <div className="container">
            <div className="content">

              <h1>Kontaktní formulář</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Vaše jméno
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Zpráva
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Odeslat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
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
