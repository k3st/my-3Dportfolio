import React from "react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? &nbsp;
        <br className="sm:block hidden" />
        Let's Build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};
