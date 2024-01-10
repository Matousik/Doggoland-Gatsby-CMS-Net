import * as React from "react";
import Layout from "../../components/Layout";
import falco from "../../img/illustrations/falco.svg";
import freckles from "../../img/illustrations/freckles-dog.svg";
import browndog from "../../img/illustrations/mild-brown-dog.svg";



export default class SlevyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="mild-cream">
          <h1 className="has-text-centered">Jak to u nás chodí?</h1>
          <div className="container">
            <div className="timeline">
              <div className="jaktounaschodi-illustration-right">
                <div className="illustration-right-content">
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Přijetí pejska pod spolek</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Pejsci se k nám dostávají z různých důvodů. Nejčastěji proto, že se o ně jejich majitelé již nemohou nebo nechtějí dále starat.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Základní péče</h3>
                      </div>
                      <div class="timeline-description"><p>
                        První, co u nás pejsek uvidí, je koupelna. Zde pejska odblešíme, odčervíme a řádně vykoupeme. Poté již pejskovi necháme zbytek dne klid na pomalé rozkoukání se.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Veterina</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Každý pes u nás projde řádnou veterinární prohlídkou. Pokud to jeho stav a věk dovolí, tak do nového domova odjíždí plně naočkován (PET PAS), čipován, odčerven a vykastrován.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration-right-illustration">
                  <img src={freckles} className="falco-illustration"></img>
                </div>
              </div>
              <div className="jaktounaschodi-illustration-left">
                <div className="illustration-left-illustration">
                  <img src={browndog} className="falco-illustration"></img>
                </div>
                <div className="illustration-left-content">
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Socializace</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Socializace je pro pejska jednou z nejdůležitějších věcí. U nás se postupně seznámí téměř se vším. Ať už jsou to různé smečky pejsků, děti, kočky, ale i ruch velkoměsta.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Výcvik</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Zakládáme si na tom, že pejsci, kteří jsou u nás v dočasné péči, projdou základním výcvikem. Ať už je to sedni, lehni, či ke mně.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Inzerce</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Nabídku pejsků máme vždy zveřejněnou na našich facebookových stránkách, zde na webu, ale i na portálu www.pesweb.cz. Zájemci se vždy nejprve přijedou podívat na pejska k nám a pokud je pes s rodinkou spokojený, tak naplánujeme předadopční kontrolu u rodinky doma.

                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jaktounaschodi-illustration-right">
                <div className="illustration-right-content">
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Papírování</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Když si již schválená rodina přijede pro pejska, tak se vždy sepisuje Adopční smlouva a za pejska se hradí adopční poplatek. Jeho smyslem je alespoň částečné pokrytí nákladů vynaložených na péči o pejska.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-entry">
                    <div class="timeline-content">
                      <div class="timeline-label">
                        <h3>Adopce</h3>
                      </div>
                      <div class="timeline-description"><p>
                        Poté co si rodinka psa odveze domů s nimi zůstaváme dále v kontaktu. Vždy se snažíme být nápomocní, aby začlenění nového člena rodiny bylo co nejlepší. Na naše svěřence se také jezdíme podívat v rámci poadopční kontroly, abychom věděli, že je vše v pořádku. Štěstí našich pejsků je naší prioritou.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="illustration-right-illustration">
                <img src={falco} className="falco-illustration"></img>
              </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}