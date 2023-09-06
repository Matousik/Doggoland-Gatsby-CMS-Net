import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import "./masonry-posts.css";

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="masonry-post">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="masonry-post-item" key={post.id} style={{borderRadius: '30px'}}>
            <article
              className={`blog-list-item tile is-child has-text-centered`}
              style={{padding: '3rem'}}
            >
              <header>
                <h3 className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
              </p>
              <Link className="custom-button" to={post.fields.slug}>
                  Čtěte více →
                </Link>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRollTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const BlogRoll = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "DD.MM.YYYY")
              featuredimage {
                childImageSharp {
                  gatsbyImageData(
                    width: 350
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

  const posts = data.allMarkdownRemark.edges.slice(0, limit);

  return <BlogRollTemplate data={{ allMarkdownRemark: { edges: posts } }} />;
};

export default BlogRoll;
