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
              title
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
      title: 'Daniela Jana Vršková',
      role: 'předsedkyně',
      description: 'Dája je předsedkyní a zakladatelkou celého spolku. Zároveň je také hlavní dočaskovou tetou, hlavní trenérkou a organizátorkou akcí. Stará se také o sociální sítě a komunikaci se sponzory.'
    },
    {
      title: 'Matouš Vondrák',
      role: 'spoluzakladatel',
      description: 'Matouš má pod palcem správu a tvorbu našich webových stránek. Je to on, kdo se stará o to, aby všechno fungovalo jak má. Také je to ultramaratonský běžec, jehož úkolem je unavit i toho největšího psího šílence, kterého má doma v dočasné péči.'
    },
    {
      title: 'Vladislava Wallachová',
      role: 'člen',
      description: 'Vlaďku nejčastěji potkáte v autě, když převáží pejsky do dočasné péče a jezdí pro materiální pomoc. A když zrovna není v autě, tak ji s námi vždy potkáte na psích akcích.'
    },
    {
      title: 'Terka Holešovská',
      role: 'člen',
      description: 'Terka je naše dočasková teta a zároveň se stará o naše webové stránky. Také je to ambasadorka projektu "Rozběháme Česko" pro město Děčín.'
    },
    {
      title: 'Kája Kolečkářová',
      role: 'člen',
      description: 'Kája se u nás stará o administrativu a také si občas zahraje na spisovatelku, proto od ní u nás najdete také pár zajímavých článků.'
    },
    {
      title: 'Andrea Nitkulincová',
      role: 'člen',
      description: 'Andy je ve spolku hlavounem našeho kastračního programu koček. Některé z našich kočiček a pejsků má také doma v dočasné péči.'
    },
  ].map(member => {
    const author = authors.find(author => author.title === member.title);
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

