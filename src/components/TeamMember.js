import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ member }) => {
  const image = getImage(member.image);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          {image && <GatsbyImage
            image={image}
            style={{objectFit: 'cover'}}
            alt={member.name}
          />}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{member.name}</p>
            <p className="subtitle is-6">{member.role}</p>
          </div>
        </div>
        <div className="content">
          {member.description}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
