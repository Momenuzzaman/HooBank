import React from "react";
import { features } from "../constants";
import Button from "./Button";
import styles, { layout } from "../style";
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we will handle the money{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button style="mt-10" />
      </div>
    </section>
  );
};

export default Business;
