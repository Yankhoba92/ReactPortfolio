import React from "react";
import "../index.css";
import {Link} from "react-router-dom";

function ActionSection() {
  return (
    <>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <Link to ="/contact"
              className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              href="contact.html"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ActionSection;
