import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import Content, { HTMLContent } from "../components/Content";

const PostContent = HTMLContent || Content;

const NewsPost = ({ post }) => (
  <div className="news-post box glow-box news-post-width" style={{marginBottom: '2rem'}}>
    <div>
      {post.frontmatter.image && (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <GatsbyImage
              image={post.frontmatter.image.childImageSharp.gatsbyImageData}
              style={{objectFit: 'cover', borderRadius: '200px'}}
              alt={post.frontmatter.title}
            />
          </div>
        )}
      <div>
        <h3 className="has-text-centered title is-size-4">{post.frontmatter.name}</h3>
        <PostContent className="content has-text-centered" content={post.html} />
      </div>
    </div>
  </div>
);

NewsPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    featuredImage: PropTypes.object,
  }).isRequired,
};

export default NewsPost;
