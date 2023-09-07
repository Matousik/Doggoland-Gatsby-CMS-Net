import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './TeamMember.css';  // Importing CSS

const TeamMember = ({ member }) => {
  const [isVisible, setIsVisible] = useState(false);  // State to toggle visibility
  const image = getImage(member.image);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="team-member-container">
      <div className="team-member-header" onClick={toggleVisibility}>
        <span className="team-member-name medium-still-sizing">{member.name}</span>
        <span className="team-member-role medium-still-sizing">{member.role}</span>
      </div>
      {isVisible && (
        <div className="team-member-details">
          <figure className="team-member-image">
            {image && (
              <GatsbyImage
                image={image}
                style={{objectFit: 'cover'}}
                alt={member.name}
              />
            )}
          </figure>
          <div className="team-member-info">
            <p className="team-member-name">{member.name}</p>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
