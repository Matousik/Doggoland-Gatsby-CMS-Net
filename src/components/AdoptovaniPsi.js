import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "./masonry.css";

const AdoptovaniPsi = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query AdoptovaniPsi {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "adoptovani-psi" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              featuredimage {
                childImageSharp {
                  gatsbyImageData(
                    height: 400
                    quality: 100
                    layout: CONSTRAINED
                  )

                }
              }
            }
          }
        }
      }
    }
  `);

  const dogs = data.allMarkdownRemark.edges.slice(0, limit);

  return (
    <div>
      <div className="masonry container">
        {dogs.map(({ node: { frontmatter: dog } }, index) => (
          <div key={`dog-${index}`} className="masonry-item has-text-centered tile is-child box notification is-primary">
            <PreviewCompatibleImage
              imageInfo={{
                image: dog.featuredimage,
                alt: `featured image thumbnail for adopce ${dog.title}`,
                width:
                  dog.featuredimage.childImageSharp.gatsbyImageData.width,
                height:
                  dog.featuredimage.childImageSharp.gatsbyImageData.height,
              }}
            />
            <h3>{dog.title}</h3>
            <p>{dog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptovaniPsi;
