import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

const HarmonogramAkce = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
  query HarmonogramAkce {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "harmonogram-akce"}}}
      sort: {order: ASC, fields: frontmatter___date}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD. MM. YYYY")
          }
        }
      }
    }
  }  
  `);

  const AkceData = data.allMarkdownRemark.edges.slice(0, limit);
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const contentComponent = HTMLContent;
  const PostContent = contentComponent || Content;

  return (
    <div>
      <h1 className="has-text-centered">Konané akce</h1>
      <div className="container" style={containerStyle}>
        <div className="columns is-multiline">
          {AkceData.map(({ node: { frontmatter: akce, html } }, index) => (
            <div key={`akce-${index}`} className="column is-12">
              <div className="box">
                <div className="columns is-centered">
                  <div className="column">
                    <div className="content">
                      <h3>{akce.title}</h3>
                      <p>
                        {akce.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <PostContent content={html} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HarmonogramAkce;
