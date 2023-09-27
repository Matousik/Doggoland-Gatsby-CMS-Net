import * as React from "react";
import Layout from "../../components/Layout";
import PsiVNasiPeci from '../../components/PsiVNasiPeci';

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