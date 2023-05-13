import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={member.image} alt={member.name} style={{objectFit: 'cover'}}/>
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
