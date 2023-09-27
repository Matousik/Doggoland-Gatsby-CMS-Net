import * as React from "react";
import Layout from "../../components/Layout";
import AdoptovaniPsi from "../../components/AdoptovaniPsi";

export default class AdopceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mild-cream" style={{paddingTop: '3rem'}}>

      <div className="container mgt-medium mgb-medium">
      <h1 className="has-text-centered">Spokojení adoptovaní pejsci</h1>
      <section className="section">
      <AdoptovaniPsi limit={10000} />
      </section>

      </div>
    </div>
      </Layout>
    );
  }
}