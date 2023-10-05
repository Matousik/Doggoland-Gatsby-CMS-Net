import * as React from "react";
import Layout from "../../components/Layout";
import HarmonogramAkce from "../../components/HarmonogramAkce";

export default class HarmonogramIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/marp-falco-ben-lejla-40dim.png')`,
            backgroundPositionY: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Harmonogram akcí
          </h1>
        </div>

        <div>
          <HarmonogramAkce limit={10000} />
        </div>
      </Layout>
    );
  }
}