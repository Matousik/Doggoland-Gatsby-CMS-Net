import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1 className="has-text-centered">Nenalezeno!</h1>
      <p className="has-text-centered">Tady už dlouho nikdo nešťekal, omlouváme se za nepříjemnosti. :(</p>
    </div>
  </Layout>
);

export default NotFoundPage;
