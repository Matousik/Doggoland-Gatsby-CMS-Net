import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import "./masonry-posts.css";

const AdopceRollTemplate = (props) => {
  const { edges: vsechnyAdopce } = props.data.allMarkdownRemark;

  return (
    <div className="masonry-post">
      {vsechnyAdopce &&
        vsechnyAdopce.map(({ node: adopce }) => (
          <div className="masonry-post-item" key={adopce.id}>
            <article
              className={`adopce-list-item tile is-child box notification`}
            >
                {adopce?.frontmatter?.featuredimage && (
                  <div className="adopce-thumbnail has-text-centered">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: adopce.frontmatter.featuredimage,
                        alt: `featured image thumbnail for adopce ${adopce.frontmatter.title}`,
                        width:
                        adopce.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                        adopce.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={adopce.fields.slug}
                  >
                    {adopce.frontmatter.title}
                  </Link>
                </p>
              <p>
                {adopce.frontmatter.description}
                <br />
                <br />
                <Link className="button is-primary is-light" to={adopce.fields.slug}>
                  Více informací →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

AdopceRollTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const AdopceRoll = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query AdopceRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "adopce-post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredimage {
                childImageSharp {
                  gatsbyImageData(
                    height: 400
                    quality: 100
                    layout: CONSTRAINED
                  )
                }
              }
              description
            }
          }
        }
      }
    }
  `);

  const vsechnyAdopce = data.allMarkdownRemark.edges.slice(0, limit);

  return <AdopceRollTemplate data={{ allMarkdownRemark: { edges: vsechnyAdopce } }} />;
};

export default AdopceRoll;
