import React from "react";
import "../services/ServiceHighlights.css";

import easyWinsIcon from "../../assets/easywins.png";
import concreteIcon from "../../assets/concrete.png";
import hackGrowthIcon from "../../assets/arrow-growth.png";

const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      id: 1,
      icon: easyWinsIcon,
      title: "Easy Wins",
      description:
        "The best products with clinical grade quality and safety standards.",
    },
    {
      id: 2,
      icon: concreteIcon,
      title: "Concrete",
      description:
        "Definite cumulative advantage for your business needs and workflow.",
    },
    {
      id: 3,
      icon: hackGrowthIcon,
      title: "Hack Growth",
      description:
        "Overcoming any hurdle requires deliberate and data-driven scaling.",
    },
  ];

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <header className="highlights-header">
          <h4 className="highlights-label">Featured Products</h4>

          <h2 className="highlights-heading">
            THE BEST SERVICES
          </h2>

          <p className="highlights-description">
            Problems trying to resolve the conflict between
          </p>
        </header>

        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <article
              key={highlight.id}
              className="highlight-item"
            >
              <div className="highlight-icon">
                <img
                  src={highlight.icon}
                  alt={highlight.title}
                />
              </div>

              <h3 className="highlight-title">
                {highlight.title}
              </h3>

              <p className="highlight-description">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;