import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const AdopceRollTemplate = (props) => {
  
  const { nodes: vsechnyAdopce } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {vsechnyAdopce &&
        vsechnyAdopce.map(({ frontmatter, html, id }) => (
          <div className="is-parent column is-6" key={id}>
            <article
              className={`blog-list-item tile is-child box notification`}
            >
              <header>
                {frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: frontmatter.featuredimage,
                        alt: `featured image thumbnail for adopce ${frontmatter.title}`,
                        width:
                          frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={fields.slug}
                  >
                    {frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {excerpt}
                <br />
                <br />
                <Link className="button is-primary is-light" to={fields.slug}>
                  Keep Reading →
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
          sort: {order: DESC, fields: frontmatter___date}
          filter: {frontmatter: {templateKey: {eq: "adopce-post"}}}
        ) {
          nodes {
            frontmatter {
              title
              templateKey
              date
              description
              heading
              intro {
                blurbs {
                  image {
                    id
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            html
            id
          }
        }
      }
      `}
      render={(data, count) => <AdopceRollTemplate data={data} count={count} />}
    />
  );
}
