import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TeamMember from "./TeamMember";
import "./masonry.css";

const TeamList = () => {
  const data = useStaticQuery(graphql`
    query GetAuthors {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "author"}}}) {
        edges {
          node {
            frontmatter {
              name
              image {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    layout: CONSTRAINED
                    width: 400
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

  const authors = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

  const teamMembers = [
    {
      name: 'Daniela Jana Vršková',
      role: 'předsedkyně',
      description: 'Dája je předsedkyní a zakladatelkou celého spolku.'
    },
    {
      name: 'Matouš Vondrák',
      role: 'spoluzakladatel',
      description: 'Matouš má pod palcem správu a tvorbu našich webových stránek. Je to on, kdo se stará o to, aby všechno fungovalo jak má.'
    },
    {
      name: 'Vladislava Wallachová',
      role: 'člen',
      description: 'John is a full-stack developer with a passion for React.John is a full-stack developer with a passion for React.'
    },
    {
      name: 'Terka Vostradovská',
      role: 'člen',
      description: 'John is a full-stack developer with a passion for React.'
    },
    {
      name: 'Kája Kolečkářová',
      role: 'člen',
      description: 'John is a full-stack developer with a passion for React.'
    },
  ].map(member => {
    const author = authors.find(author => author.name === member.name);
    return {
      ...member,
      image: author?.image?.childImageSharp?.gatsbyImageData,
    };
  });

  return (
    <div className="team-list">
        {teamMembers.map((member, index) => (
        <div key={index}>
            <TeamMember member={member} />
            <hr></hr>
        </div>
        ))}
    </div>
  );
};

export default TeamList;
