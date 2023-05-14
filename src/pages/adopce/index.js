import * as React from "react";
import AdopceRoll from "../../components/AdopceRoll";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import PsiVNasiPeci from '../../components/PsiVNasiPeci';
import AdoptovaniPsi from "../../components/AdoptovaniPsi";

export default class AdopceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            K Adopci
          </h1>
        </div>
        <h2 className="has-text-centered has-text-weight-bold is-size-2">Níže naleznete pejsky k adopci</h2>
        <p className="has-text-centered mgt-small">
          Pokud máte zájem o adopci, vyplňte prosím <Link to="/contact">kontaktní formulář</Link> a my se vám ozveme.
        </p>
        <p className="has-text-centered mgt-medium">
          <a className="button is-primary is-light has-text-centered" href="#prubeh-adopce">
            Jak u nás adopce probíhá?
          </a>
        </p>
        <section className="section">
        <AdopceRoll limit={10000} />
        </section>
        <h2 id="prubeh-adopce" className="has-text-centered has-text-weight-bold is-size-2">Průběh adopce</h2>
        <p className="has-text-centered mgt-small">Dodělat </p>
        <div>

      <div className="container mgt-medium mgb-medium">
      <h2 className="has-text-centered has-text-weight-bold is-size-2">Níže naleznete všechny pejsky v naší péči</h2>

      <PsiVNasiPeci limit={10000} />

      <h1 className="has-text-centered has-text-weight-bold is-size-2">Spokojení adoptovaní pejsci</h1>
      <AdoptovaniPsi limit={10000} />

      </div>
    </div>
      </Layout>
    );
  }
}