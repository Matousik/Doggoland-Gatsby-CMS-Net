import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NewsPost from './NewsPost';
import PropTypes from "prop-types";


const NewsFeed = ({ limit = 10000 }) => {
  const data = useStaticQuery(graphql`
    query AktualityQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "aktuality" } } }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                templateKey
                date(formatString: "DD.MM.YYYY")
                image {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: CONSTRAINED
                        height: 400
                        placeholder: BLURRED
                      )
                    }
                 }
              }
            }
          }
        }
      }
  `);

  const posts = data.allMarkdownRemark.edges.map(edge => edge.node).slice(0, limit);

  return (
    <div className='news-wrapper'>
      {posts.map((post, index) => (
        <NewsPost post={post} key={index}/>
      ))}
    </div>
  );
};

NewsFeed.propTypes = {
  limit: PropTypes.number,
};

export default NewsFeed;
