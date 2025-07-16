import React from "react";

export const About = (props) => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title text-center">
          <h2>About Our Product</h2>
          <p className="subtitle">
            Learn how our technology is revolutionizing the way you work.
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>{props.data ? props.data.paragraph : "Loading..."}</p>
              <h3 className="why-title">Why Choose Us?</h3>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="about-list">
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={i}>✔ {d}</li>)
                      : "Loading..."}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="about-list">
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={i}>✔ {d}</li>)
                      : "Loading..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
