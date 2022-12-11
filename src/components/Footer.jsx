import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="hooBank" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payment easy,reliable and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
