import React from "react";
import Headshot from "../assets/images/Headshot.png";
import Resume from "../components/Resume";

function About() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      <p className="aboutMe">
        I'm a problem solver who brings value to both customers and businesses.
        My passion is strategy and problem solving by fully leveraging good
        communication skills and understanding the business wholistically. I dig
        into the details when needed and create strategies to maintain and grow
        businesses based on my insight.
        <br />
        <br />
        My domain expertise is in retail. If you have a retail challenge
        especially in regards to tech, I can help!
        <br />
        <br />
        My strength in strategy is knowing just enough about many roles for a
        well rounded perspective, a good understanding of knowing the larger
        impact, and the insight to ensure the inclusion of key stakeholders.
        This is a key reason for my need to learn software engineering as I
        transition to the tech industry.
        <br />
        <br />
        I’ve managed areas of businesses worth over $100 million. I’ve turned
        would be exit businesses into company initiatives while also training
        others to do the same based on the application of strategic thinking.
        <br />
        <br />I am the type of person who continues learning, who reaches out
        for collaboration, who is always looking for ways to bring wins to
        companies, and who loves driving results by being clear with product
        vision.
      </p>
      <Resume />
      <hr />
      <h3>Companies I've worked with or for include:</h3>
      <div className="logogrid">
        <img
          className="logoCompanies"
          src="https://assets.bizjournals.com/cincinnati/MacysLogo.jpg?v=1"
          alt="macys logo"
        />

        <img
          className="logoCompanies"
          src="https://s3.amazonaws.com/assets.lando.vibescm.com/data/pages/11771/widgets/e1b3ed34-c20c-4652-99b7-efdf26bbe331/image/1443536663.png?Bloomingdales_whitelogo.png"
          alt="bloomingdales logo"
        />

        <img
          className="logoCompanies"
          src="https://images.squarespace-cdn.com/content/v1/5d701d02e727330001761534/1571261858022-2FWQ1FZ8VQ6T76K3KBIH/ke17ZwdGBToddI8pDm48kPP9zlude8o7zk8_oGjMPTYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRh5_EOsJrcV6Yauta9zr-NBDhN0_SfAqnXGsx9aEiFX5Wevz_PbnNcBjlGJ5eLZO/saks+fifth+avenue+logo.png"
          alt="saks logo"
        />

        <img
          className="logoCompanies"
          src="https://ww1.prweb.com/prfiles/2013/10/01/11183291/LOEHMANNS_HighRes.jpg"
          alt="Loehmann's logo"
        />

        <img
          className="logoCompanies"
          src="https://www.licenseglobal.com/sites/licenseglobal.com/files/styles/article_featured_retina/public/niemanmarcus.png?itok=gpgVIrrs"
          alt="Neiman Marcus logo"
        />

        <img
          className="logoCompanies"
          src="https://logodix.com/logo/6318.png"
          alt="Nordstrom logo"
        />

        <img
          className="logoCompanies"
          src="https://rmhc-carolinas.org/wp-content/uploads/bfi_thumb/dillards-348y1i2h2j4g9u9hpr4ob79uqkio2jiuz6rz1znlxfa26js8y.png"
          alt="Dillards logo"
        />

        <img
          className="logoCompanies"
          src="https://johnlewis.scene7.com/is/image/JohnLewis/adriannapapell_brl"
          alt="Adrianna Papell logo"
        />

        <img
          className="logoCompanies"
          src="https://allure-eyewear.com/wp-content/uploads/2018/03/Aeropostale-White-Logo.png"
          alt="Aeropostale logo"
        />

        <img
          className="logoCompanies"
          src="https://media.wilderco.com/logos/wayside-eileen-fisher.png"
          alt="Eileen Fisher logo"
        />

        <img
          className="logoCompanies"
          src="https://i.imgur.com/boT5bZM.png"
          alt="JCP logo"
        />

        <img
          className="logoCompanies"
          src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1397817977/user-138696/profile/b9caoozvzaexrvqgtavs.jpg"
          alt="Ann Klien New York logo"
        />

        <img
          className="logoCompanies"
          src="https://www.aiga.org/globalassets/aiga/content/tools-and-resources/in-house/the-many-lives-of-the-190-year-old-lord-and-taylor-logo/l_6-lord-taylor-aiga-design-logo.jpg"
          alt="Lord & Taylor logo"
        />

        <img
          className="logoCompanies"
          src="https://www.eyeboutique.com/Content/files/GenCart/ProductCatImages/CatBannerLogoJonesNewYork.png"
          alt="Jones New York logo"
        />

        <img
          className="logoCompanies"
          src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/32190996_1921919664544796_4394169195017797632_o.jpg?_nc_cat=106&_nc_sid=6e5ad9&_nc_ohc=t09Bse9YYvIAX8fT44W&_nc_ht=scontent-lga3-2.xx&oh=75c9690e85d2d200ef0ca43bbae79b24&oe=5F60906E"
          alt="real snaps logo"
        />

        <img
          className="logoCompanies"
          src="https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/clipart-13916-28610-550x550.png"
          alt="US Army logo"
        />
      </div>
    </div>
  );
}

export default About;
