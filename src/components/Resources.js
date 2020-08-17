import React from "react";
import Headshot from "../assets/images/Headshot.png";
import Resume from "./Resume";

function Resources() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      <h3>Amazon</h3>
      <p className="aboutMe">
        Some have issue with Amazon, but there is quite a bit to learn from this
        company. First being that they are customer obsessed. This means
        ensuring the company is happy with the service is their number one
        focus. This builds both loyalty and trust. An additional thing to take
        note of in regards to Amazon is most products come from third party
        vendors. Amazon leverages their warehouse services to assist businesses
        with achieving fast shipping as well as not get to caught up in the work
        of logistics.
        <br />
        <br />
        <h3>Shopify</h3>
        Shopify is one of my favorite companies in existance. This company
        breaks down the barriers of entry to creators of all sorts. Previously,
        one would need to either go to a developer to get a custom website or
        use prebuilt websites from companies such as GoDaddy. Previous template
        sites gave little flexibility to users and also weren't as fast for the
        end users. Shopify offers ease of customization via using GUI or
        graphical user interface, several templates to choose from ranging from
        free to paid, a marketplace for easily gaining developer help and
        provide limited access, thousands of plugins to quickly get your store
        to a point of looking legit, analytics, and so much more. Handsdown if
        you're looking to create an e-commerce website, start here first. You
        may want to build a website from scratch later, but this will allow you
        to quickly get started and learn what works before spending heavily on
        having a custom site built.
        <br />
        <br />
        <h3>More to Come Soon!</h3>
      </p>
    </div>
  );
}

export default Resources;
