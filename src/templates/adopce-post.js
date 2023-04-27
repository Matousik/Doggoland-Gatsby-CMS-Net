import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AdopcePostTemplate = ({
  content,
  contentComponent,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const PostContent = contentComponent || Content;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <PostContent content={content} />
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/adopce">
                        Zpět na seznam adopcí
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AdopcePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const AdopcePost = ({ data }) => {

  return (
    <Layout>
      <AdopcePostTemplate
        content={data.html}
        contentComponent={HTMLContent}      
        image={data.markdownRemark.frontmatter.image}
        title={data.markdownRemark.frontmatter.title}
        heading={data.markdownRemark.frontmatter.heading}
        subheading={data.markdownRemark.frontmatter.subheading}
        mainpitch={data.markdownRemark.frontmatter.mainpitch}
        description={data.markdownRemark.frontmatter.description}
        intro={data.markdownRemark.frontmatter.intro}
      />
    </Layout>
  );
};

AdopcePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AdopcePost;

export const pageQuery = graphql`
query AdopcePostByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 400, quality: 64, layout: CONSTRAINED)
              }
            }
          }
          heading
          description
        }
      }
    }
  }
`;

