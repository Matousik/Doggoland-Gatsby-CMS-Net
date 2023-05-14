import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import Content, { HTMLContent } from "../components/Content";
import "./NewsPost.css"

const PostContent = HTMLContent || Content;

const NewsPost = ({ post }) => (
  <div className="news-post box glow-box news-post-width" style={{marginBottom: '2rem'}}>
    <div className="columns is-vcentered">
      <div className="column">
        <h2 className="title is-2 has-text-centered">{post.frontmatter.name}</h2>
        <PostContent className="content has-text-centered" content={post.html} />
      </div>
      {post.frontmatter.image && (
        <div className="column" style={{display: 'flex', justifyContent: 'center'}}>
          <GatsbyImage
            image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            style={{objectFit: 'cover'}}
            alt={post.frontmatter.title}
          />
        </div>
      )}
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
