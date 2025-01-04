import React from "react";
import realTimeImage from "../assets/real-time-search.jpg";
import pricingImage from "../assets/transparent-pricing.png";
import supportImage from "../assets/customer-support.png";
import dealsImage from "../assets/exclusive-deals.png";
import Navbar from "../elements/Navbar";
import style from "../styles/About.module.css";

function About() {
  return (
    <div className="Home">
      <Navbar />
      <div className={style.aboutContainer}>
        {/* About Us Section */}
        <h2 className={style.Blue}>About Us</h2>
        <p className={style.sectionDescription}>
          Welcome to CheapFares, your one-stop solution to affordable and
          transparent airfare. Our mission is to help you save time and money by
          providing the best flight deals, with no hidden fees. Below are some
          of the key features that set us apart:
        </p>

        {/* Features Section */}
        <div className={style.imageContainer}>
          <div className={style.imageItem}>
            <h4 className={style.imageSubheading}>Real-Time Search</h4>
            <img
              src={realTimeImage}
              alt="Real-Time Search"
              className={style.image}
            />
            <p className={style.imageDescription}>Find the best prices...</p>
          </div>
          <div className={style.imageItem}>
            <h4 className={style.imageSubheading}>Transparent Pricing</h4>
            <img
              src={pricingImage}
              alt="Transparent Pricing"
              className={style.image}
            />
            <p className={style.imageDescription}>All fees upfront...</p>
          </div>
          <div className={style.imageItem}>
            <h4 className={style.imageSubheading}>Customer Support</h4>
            <img
              src={supportImage}
              alt="Customer Support"
              className={style.image}
            />
            <p className={style.imageDescription}>We’re here for you...</p>
          </div>
          <div className={style.imageItem}>
            <h4 className={style.imageSubheading}>Exclusive Deals</h4>
            <img
              src={dealsImage}
              alt="Exclusive Deals"
              className={style.image}
            />
            <p className={style.imageDescription}>Special discounts for you...</p>
          </div>
        </div>

        {/* Call to Action */}
        <section className={style.ctaSection}>
          <h3 className={style.ctaTitle}>Get Started Today</h3>
          <p className={style.ctaDescription}>
            Ready to find the best airfare deals? Start your search now and
            experience transparent pricing and real-time results.
          </p>
          <button className={style.ctaButton}>Start Searching</button>
        </section>

        {/* Contact Info */}
        <section className={style.contactSection}>
          <h3>Contact Us</h3>
          <p>Email: support@cheapfares.com</p>
          <p>Follow us on social media for updates!</p>
        </section>
      </div>
    </div>
  );
}

export default About;