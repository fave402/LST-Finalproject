import React from "react";
import "../CallToAction/CallToAction.css";

const CallToAction: React.FC = () => {
  return (
    <section className="calltoaction-section">
      <div className="calltoaction-container">
        <div className="calltoaction-content">
          <span className="calltoaction-subtitle">Designing Better Experience</span>
          <h2 className="calltoaction-title">
            Problems trying to resolve the conflict between
          </h2>
          <p className="calltoaction-desc">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="calltoaction-price">$16.48</div>
          <button className="calltoaction-button">ADD YOUR CALL TO ACTION</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;