import * as React from "react";
import AdopceRoll from "../../components/AdopceRoll";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import PsiVNasiPeci from '../../components/PsiVNasiPeci';
import AdoptovaniPsi from "../../components/AdoptovaniPsi";

export default class AdopceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            K Adopci
          </h1>
        </div>
        <h2 className="has-text-centered has-text-weight-bold is-size-2">Níže naleznete pejsky k adopci</h2>
        <p className="has-text-centered mgt-small">
          Pokud máte zájem o adopci, vyplňte prosím <Link to="/contact">kontaktní formulář</Link> a my se vám ozveme.
        </p>
        <p className="has-text-centered mgt-medium">
          <a className="button is-primary is-light has-text-centered" href="#prubeh-adopce">
            Jak u nás adopce probíhá?
          </a>
        </p>
        <section className="section">
        <AdopceRoll limit={10000} />
        </section>
        <section className="section">
          <div className="container">
            <div className="column is-10 is-offset-1 clanek">
              <h2 id="prubeh-adopce" className="has-text-centered has-text-weight-bold is-size-2">Průběh adopce</h2>
              <h3 className="">1. Hovor po telefonu</h3>
              <p className="mb-6">U každého našeho pejska je zveřejněné telefonní číslo, na kterém čeká jedna z našich kolegyň. O pejskovi Vám řekne více informací, které se do inzerátu nevešly, a především se vyptá na více informací a podmínkách, které pejskovi můžete nabídnout.</p>
              <h3 className="">2. Návštěva pejska</h3>
              <p className="">Pokud při telefonátu společně zhodnotíme, že by se pejsek, o kterého máte zájem, skvěle do Vaší rodiny hodil, tak Vás pozveme na návštěvu za pejskem. Návštěva probíhá vždy v dočasném domově, kde pejsek žije. Díky tomu pejska uvidíte v klidném domácím prostředí, kde je zvyklý. Po domluvě s dočaskovou tetou společně můžete jít i na procházku, kde uvidíte, jak se pejsek chová i na veřejnosti.</p>
              <p className="">Chtěli bychom apelovat na jednu věc. Nebojte se ptát! Všechny dotazy jsou správné! Vybíráte si člena rodiny a máte v tuto chvíli vedle sebe člověka, který jej zná naprosto nejlépe. Pejsky máme v dočasné péči často několik měsíců, než je plně připravíme do nového domova. Díky tomu je známe opravdu dobře.</p>
              <h3 className="">3. Předadopční kontrola a předání pejska</h3>
              <p className="">Návštěva dopadla skvěle a s pejskem jste si rozuměli. Teď už se blížíme k jistému finále. Tato poslední část adopce se liší především dle toho, kde bydlíte.</p>
              <h4 className="">První varianta</h4>
              <p className="">Bydlíte do cca 100 km od dočaskové tety? V tomto případě sbalíme pejska, připravenou adopční smlouvu a přijedeme se k Vám domů podívat. Nejedná se o žádnou kontrolu, jak máte doma naklizeno! 😊 Chceme pouze vidět v jakých podmínkách bude pejsek bydlet a zdali nám nebylo něco podstatného zatajeno.</p>
              <h4 className="">Druhá varianta</h4>
              <p className="">Bydlíte dál než 100 km od dočaskové tety? V tomto případě se dohodneme s jedním z našich dobrovolníků poblíž Vás, který Vás osobně navštíví doma. Pokud bude vše v pořádku, tak si poté budete moci pro pejska přijet a adopční smlouvu podepsat u dočaskové tety.</p>
              <h3 className="">4. Podpis adopční smlouvy a uhrazení adopčního poplatku</h3>
              <p className="">Adopční smlouvy se není třeba obávat, jsou zde zahrnuty podmínky adopce. Mezi ty patří například souhlas s budoucí poadopční kontrolou, zasílání fotografií, informací o Vašem soužitím s pejskem atd.</p>
              <p className="">Adopční poplatek se odvíjí od staří pejska, jeho zdravotního stavu a především dle úrovně jeho výcviku. S pejsky trénujeme základní poslušnost, socializujeme je a zajišťujeme nadstandardní veterinární ošetření. Pejsci od nás odchází vždy očkovaní, čipovaní (se zaregistrovaným čipem), odčervení, kastrovaní (pokud k tomu mají odpovídající věk). Pokud mají další nadstandardní vyšetření (RTG, vyšetření krve, moči…), tak se výsledné zprávy přidávají k adopční smlouvě. Do nového domova naši svěřenci dostávají i startovací balíček, kde je krmení minimálně na jeden týden a produkty našich partnerů. Výše adopčního poplatku se pohybuje od 3 000 do 10 000 Kč.</p>
              <h3 className="">5. První dny doma s pejskem</h3>
              <p className="">A máme tu finále. První dny s novým psím parťákem nemusí být nejjednodušší. Vždy je třeba čas. Pokud by se Vám jakékoliv chování pejska nezdálo, nebo byste si nebyli jisti s jakoukoliv situací, tak se na nás můžete vždy obrátit! Jak na dočaskovou tetu, tak na vedení spolku. Vždy jsme tu pro Vás. Hned první den adopce dostanete pozvánku i do naší soukromé skupinky pro rodiny s adoptovanými pejsky. Za fotky a informace o tom, jak se Vám s novým parťákem daří, budeme rádi. 😊</p>
            </div>
         </div>
      </section>
        <div>

      <div className="container mgt-medium mgb-medium">
      <h2 className="has-text-centered has-text-weight-bold is-size-2">Níže naleznete všechny pejsky v naší péči</h2>

      <PsiVNasiPeci limit={10000} />

      <h1 className="has-text-centered has-text-weight-bold is-size-2">Spokojení adoptovaní pejsci</h1>
      <AdoptovaniPsi limit={10000} />

      </div>
    </div>
      </Layout>
    );
  }
}