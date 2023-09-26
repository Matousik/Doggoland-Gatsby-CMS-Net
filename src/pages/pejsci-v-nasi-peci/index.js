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
        <div className="mild-cream" style={{paddingTop: '3rem'}}>

      <div className="container mgt-medium mgb-medium">
      <h2 className="has-text-centered">Níže naleznete všechny pejsky v naší péči</h2>
      <section className="section">
      <PsiVNasiPeci limit={10000} />
      </section>

      </div>
    </div>
      </Layout>
    );
  }
}