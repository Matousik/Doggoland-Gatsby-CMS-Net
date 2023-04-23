import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const AdopceContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <AdopceContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
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

const AdopcePost = ({ data }) => {
  const { markdownRemark: adopce } = data;

  return (
    <Layout>
      <AdopcePostTemplate
        content={adopce.html}
        contentComponent={HTMLContent}
        description={adopce.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Adopce">
            <title>{`${adopce.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${adopce.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={adopce.frontmatter.tags}
        title={adopce.frontmatter.title}
      />
    </Layout>
  );
};

AdopcePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default AdopcePost;

export const pageQuery = graphql`
  query AdopcePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
