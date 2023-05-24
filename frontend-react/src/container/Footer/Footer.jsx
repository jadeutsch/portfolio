import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="headText">Grab a coffee & chat with me</h2>
      <div className="footer__cards">
        <div className="card">
          <img
            src="https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/email.png"
            alt="email"
          />
          <a href="mailto:deutsch.jeff.a@gmail.com" className="pText">
            deutsch.jeff.a@gmail.com
          </a>
        </div>
        <div className="card">
          <img
            src="https://jeffdeutsch-projects.s3.amazonaws.com/portfolio_site/mobile.png"
            alt="mobile"
          />
          <a href="tel: +1660.815.5142" className="pText">
            +1660.815.5142
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="footer__form flex">
          <div className="flex">
            <input
              type="text"
              className="pText"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex">
            <input
              type="email"
              className="pText"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="pText"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button className="pText" type="button" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="headText">Thanks for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "footer"), "contact", "app__primaryBg");
