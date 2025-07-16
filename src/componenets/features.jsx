import React from "react";

export const Features = (props) => {
  return (
    <section id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Features</h2>
          <p className="subtitle">
            Powerful features designed to make your experience better.
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3">
                <div className="feature-box">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading features...</p>
          )}
        </div>
      </div>
    </section>
  );
};
