import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "./masonry.css";

const PsiVNasiPeci = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query PsiVNasiPeciQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "psi-v-nasi-peci" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
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
      <div className="masonry-post container">
        {dogs.map(({ node: { frontmatter: dog } }, index) => (
          <div key={`dog-${index}`} className="masonry-post-item">
            <div className="adopce-list-item  tile has-text-centered is-child">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsiVNasiPeci;
