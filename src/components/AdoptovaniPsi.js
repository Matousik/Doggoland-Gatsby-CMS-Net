import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "./masonry.css";

const AdoptovaniPsi = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query AdoptovaniPsi {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "adoptovana-zvirata" } } }
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
                    placeholder: BLURRED
                    transformOptions: {fit: COVER, cropFocus: CENTER}
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
            <div className=" adopce-list-item  tile has-text-centered is-child">
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
            </div>
          </div>
        ))}
      

      </div>
    </div>
  );
};

export default AdoptovaniPsi;
