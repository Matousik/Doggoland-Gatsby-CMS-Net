import * as React from "react";
import freckles from "../../img/falco-clever-boi.jpeg";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="mild-cream blog-introduction"
        >
          <h1 className="has-text-centered"
          >
            Chcete vědět víc?
          </h1>
          <div className="blog-introduction-image">
            <img src={freckles}></img>
          </div>
          
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll limit={10000} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
