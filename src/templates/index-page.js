import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImageLooping";
import BankAccountQRCode from "../components/BankAccountQRCode";

import BlogRoll from "../components/BlogRoll";
import AdopceRoll from "../components/AdopceRoll";

import NewsFeed from "../components/NewsFeed";


// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  intro,
}) => {

  return (
    <div>
      <FullWidthImage img={intro.blurbs} title={"Vítejte v Doggolandu"} height={"95vh"} style={{marginTop: "-5rem"}} />
      <section className="section adopce-roll-section-container">
        <div className="container">
          <h2 className="has-text-centered">Nová várka pejsků k adopci</h2>
          <p className="text-max-width-margining has-text-centered">Pejsci i kočičky s námi bydlí doma u našich dočasných tet. Jsou součástí našich rodin, nikoliv jen obyvatelem studeného kotce, na kterém je evidenční číslo. V naší péči pejskové projdou kompletním veterinárním vyšetřením, řádnou socializací (návštěvy města, auto, rodinné oslavy) a základním výcvikem tak, aby do domova odcházeli jako bezpečně ovladatelní, spokojení a vyrovnaní psí parťáci.</p>
        </div>
        <div className="roller-container">
          <AdopceRoll limit={3} />
        </div>
        <div className="container has-text-centered">
          <Link
              className="custom-button"
              to="/adopce"
            >Další pejsci
            </Link>
        </div>
      </section>
      <div>
        <BankAccountQRCode />
      </div>
      <section className="section">
        <p className="line-before-text">Aktuality</p>
        <div className="container">
          <h2>Stále se u nás dějí nějaké novinky, tak buďte v obraze!</h2>
          <div className="container">
          <NewsFeed limit={3} />
          </div>
        </div>
      </section>
      <section className="section blog-roll-container">
        <p className="line-before-text">Blog</p>
        <div className="container">
          <h2>Některé naše myšlenky zpracováváme do článků</h2>
          <BlogRoll limit={3} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                      Co s tímhle? - Vítejte v Doggolandu!
                      </h3>
                      <p>Vítejte v našem malém psím světe, kde léčíme nemocné psí duše. Pomáháme pejskům, kterých se ostatní zbavili. Často u nás potkáte pejsky dříve týrané, psychicky zlomené či hodně nemocné. Každý den jim ukazujeme, že ne všichni lidé jsou zlí a že už se není čeho bát.</p>
                      <p>Pejsci i kočičky s námi bydlí doma u našich dočasných tet. Jsou součástí našich rodin, nikoliv jen obyvatelem studeného kotce, na kterém je evidenční číslo.</p>
                      <p>V naší péči pejskové projdou kompletním veterinárním vyšetřením, řádnou socializací (návštěvy města, auto, rodinné oslavy) a základním výcvikem tak, aby do domova odcházeli jako bezpečně ovladatelní, spokojení a vyrovnaní psí parťáci.</p>
                      <p>Více o naší práci a o tom, jak to u nás chodí, najdete v záložce "Jak to u nás chodí".</p>
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 2000, quality: 100, layout: CONSTRAINED)
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
