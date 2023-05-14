import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";
import TeamMember from "../../components/TeamMember";
import "../../components/masonry.css";


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  const data = useStaticQuery(graphql`
    query GetAuthors {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "author"}}}) {
        edges {
          node {
            frontmatter {
              name
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 400)
                }
              }
            }
          }
        }
      }
    }
  `);

  const authors = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
  console.log(authors);

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
    console.log(author)
    return {
      ...member,
      image: author?.image?.childImageSharp?.gatsbyImageData,
    };
  });
  console.log(teamMembers);

  return (
    <section className="section section--gradient">
      <div className="full-width-image-container margin-top-0" style={{ backgroundImage: `url('/img/blog-index.jpg')` }}>
        <h1 className="has-text-weight-bold is-size-1" style={{ boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40", backgroundColor: "#f40", color: "white", padding: "1rem" }}>
          Náš tým
        </h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Kdo jsme?
              </h2>
              <p className="mgt-small">
                Náš Doggoland tým se zatím skládá jen z pár psích nadšenců, ale o to silnější jsme. Každý z nám vyniká v něčem jiném a tím je z nás skvělý tým. Máme společný cíl, který nás spojuje. A tím je láska ke zvířatům a snaha jim pomoci. S našimi svěřenci pracujeme individuálně, jedeme na kvalitu, nikoli na kvantitu. 
              </p>
              <p className="mgt-small"> 
                Přidejte se mezi nás a staňte se součástí naší Doggoland rodiny. V případě zájmu nám pomoci s administrativou, převozy, akcemi, s dočaskováním atd. nám napiště info@doggoland.cz. Rádi Vás mezi námi přivítáme. 
              </p>
              <div className="masonry">
                {teamMembers.map((member, index) => (
                  <div className="masonry-item" key={index}>
                    <TeamMember member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ title, content, contentComponent }) => {
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={content}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPage;

