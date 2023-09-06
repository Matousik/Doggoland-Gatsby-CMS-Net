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
          <div className="masonry-post-item" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification`}
            >
              <header>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-primary is-light" to={post.fields.slug}>
                  Čtěte více →
                </Link>
              </p>
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
