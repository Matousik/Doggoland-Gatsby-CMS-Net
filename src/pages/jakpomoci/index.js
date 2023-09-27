import * as React from "react";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import falco from "../../img/illustrations/falco.svg";

export default class SlevyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section mild-cream">
          <div className="container blog-introduction-no-wrap">
            <h1 className="has-text-centered">Za podporu budeme velmi vděční!</h1>
            <img src={falco} className="falco-illustration"></img>
          </div>
          <div className="jak-pomoci-cards-container">
            <div className="jak-pomoci-card">
              <h3 className="has-text-centered">FINANČNÍ DARY</h3>
              <FontAwesomeIcon icon={faPiggyBank} className="jak-pomoci-icon" />
              <p className="has-text-centered">Zasláním finančního daru na náš transparentní účet č. 2302170901/2010, tento účet slouží výhradně k zaplacení veteriny, krmení, a dalších potřeb pro pejsky.</p>
            </div>
            <div className="jak-pomoci-card">
              <h3 className="has-text-centered">MATERIÁLNÍ POMOC</h3>
              <FontAwesomeIcon icon={faBoxOpen} className="jak-pomoci-icon" />
              <p className="has-text-centered">Materiálním obdarováním našich pejsků. Nejvíce nám pomohou kvalitní konzervičky, vodítka/obojky/kšírky, odčervovací tabletky pro pejsky, pelíšky či například hračky nebo hlavolamy pro pejsky. 🦮</p>
            </div>
            <div className="jak-pomoci-card">
              <h3 className="has-text-centered">AUKCE</h3>
              <FontAwesomeIcon icon={faGavel} className="jak-pomoci-icon" />
              <p className="has-text-centered">Účastí v našich aukcích. Přidejte se do naší skupinky <a href="https://www.facebook.com/groups/512692203599382" target="blank">"Doggoland z.s. - aukce"</a> zde budeme pravidelně pořádat aukce. Můžete tedy spojit příjemné s užitečným. Vyaukcovat si nějaký pěkný dáreček a zároveň podpořit náš spolek. 🎁🧸</p>
            </div>
            <div className="jak-pomoci-card">
              <h3 className="has-text-centered">SDÍLENÍ</h3>
              <FontAwesomeIcon icon={faShareNodes} className="jak-pomoci-icon" />
              <p className="has-text-centered">Sdílením našich příspěvků, převážně těch, kde jsou naši pejsci k adopci. Třeba díky vašemu sdílení se fotka pejska dostane k rodince k milující rodince toužící si pejska adoptovat. 🏠</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}