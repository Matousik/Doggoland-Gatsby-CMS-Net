import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";

// eslint-disable-next-line
export const AdopcePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  intro,
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
            <Features gridItems={intro.blurbs} />
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

AdopcePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const AdopcePost = ({ data }) => {
  const { markdownRemark: adopce } = data;

  return (
    <Layout>
      <AdopcePostTemplate
        content={adopce.html}
        contentComponent={HTMLContent}
        description={adopce.frontmatter.description}
        intro={adopce.frontmatter.intro}
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
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
