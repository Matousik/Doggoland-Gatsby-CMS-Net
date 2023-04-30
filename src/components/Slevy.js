import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Slevy = () => {
  const data = useStaticQuery(graphql`
    query Slevy {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "slevy" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              featuredimage {
                childImageSharp {
                  gatsbyImageData(
                    height: 50
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

  const Slevy = data.allMarkdownRemark.edges;
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1 className="has-text-centered has-text-weight-bold is-size-2">Slevové kódy</h1>
      <div className="container" style={containerStyle}>
        <div className="columns is-multiline">
          {Slevy.map(({ node: { frontmatter: sleva } }, index) => (
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
                      <h3 className="is-size-4 has-text-weight-semibold">{sleva.title}</h3>
                      <p>
                        {sleva.discount} &bull; "{sleva.code}" &bull;{" "}
                        <a href={`https://${sleva.website}`} target="_blank" rel="noopener noreferrer">
                          www.krmiva-pucalka.cz
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <p>{sleva.description}</p>
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
