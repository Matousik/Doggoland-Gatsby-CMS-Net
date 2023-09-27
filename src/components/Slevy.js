import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

const Slevy = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query Slevy {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "slevy" } } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              description
              featuredimage {
                childImageSharp {
                  gatsbyImageData(
                    height: 70
                    quality: 100
                    layout: CONSTRAINED
                  )
                }
              }
              discount
              code
              website
            }
          }
        }
      }
    }
  `);

  const slevyData = data.allMarkdownRemark.edges.slice(0, limit);
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const contentComponent = HTMLContent;
  const PostContent = contentComponent || Content;

  return (
    <div>
      <h1 className="has-text-centered">Slevové kódy</h1>
      <div className="container" style={containerStyle}>
        <div className="columns is-multiline">
          {slevyData.map(({ node: { frontmatter: sleva, html } }, index) => (
            <div key={`sleva-${index}`} className="column is-12">
              <div className="box">
                <div className="columns is-vcentered">
                  <div className="column is-narrow has-text-centered">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: sleva.featuredimage,
                        alt: `featured image thumbnail for adopce ${sleva.title}`,
                        width:
                          sleva.featuredimage.childImageSharp.gatsbyImageData.width,
                        height:
                          sleva.featuredimage.childImageSharp.gatsbyImageData.height,
                      }}
                    />
                  </div>
                  <div className="column">
                    <div className="content">
                      <h3>{sleva.title}</h3>
                      <p>
                        {sleva.discount} &bull; Kód: "{sleva.code}" &bull;{" "}
                        <a href={`https://${sleva.website}`} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: 'nowrap' }}>
                        {sleva.website}
                        </a>
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

export default Slevy;
