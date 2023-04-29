import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const AdopceRollTemplate = (props) => {
  
  const { edges: vsechnyAdopce } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {vsechnyAdopce &&
        vsechnyAdopce.map(({ node: adopce }) => (
          <div className="is-parent column is-6" key={adopce.id}>
            <article
              className={`blog-list-item tile is-child box notification`}
            >
              <header>
                {adopce?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
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
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {adopce.frontmatter.date}
                  </span>
                </p>
              </header>
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

AdopceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function AdopceRoll() {
  return (
    <StaticQuery
      query={graphql`
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
                      width: 120
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
      `}
      render={(data, count) => <AdopceRollTemplate data={data} count={count} />}
    />
  );
}
