import React from "react";
import "./Quote.css";
import LightSpeed from "react-reveal/LightSpeed";
const Quote = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <LightSpeed left ssrFadeout>
          <div className="quote-wrapper">
            <div className="quote">
              <h1>
                <q>
                  Getting a quality website is not an expenses but rather an
                  investment
                </q>
              </h1>
            </div>
            <div className="empty"></div>
          </div>
        </LightSpeed>
      </div>
    </div>
  );
};

export default Quote;
