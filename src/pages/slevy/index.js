import * as React from "react";
import Layout from "../../components/Layout";
import Slevy from '../../components/Slevy';

export default class SlevyIndexPage extends React.Component {
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
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Slevy a sponzoři
          </h1>
        </div>
        
        <div className="container mgt-medium mgb-medium">
      <Slevy />

      </div>
      </Layout>
    );
  }
}