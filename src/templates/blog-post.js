import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "./blogstyling.css";
import { GatsbyImage } from "gatsby-plugin-image";


// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  description,
  title,
  helmet,
  author,
}) => {
  const PostContent = contentComponent || Content;
  const imageStyle = { borderRadius: "5px" };


  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div className="media" style={{ marginBottom: '20px' }}>
  <div className="media-left">
    {author.image && (
      <GatsbyImage
        image={author.image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={author.name}
      />
    )}
  </div>
  <div className="media-content">
    <p className="is-size-5 has-text-weight-bold">
      {author.name}
    </p>
  </div>
</div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tagy</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark: authors } = data;
  const author = authors.edges.find(
    author => author.node.frontmatter.name === post.frontmatter.author
  ).node.frontmatter;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Doggoland - Články">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={author}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
query BlogPostByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      tags
      description
      author
    }
  }
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "author"}}}) {
    edges {
      node {
        frontmatter {
          name
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 50)
            }
          }
        }
      }
    }
  }
}
`;



