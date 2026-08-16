import React from "react";
import "../Testimonials/CustomerFeedback.css";

import userAvatar from "../assets/user.png";
import grid1 from "../assets/img-1.jpg";
import grid2 from "../assets/img-2.jpg";
import grid3 from "../assets/img-3.jpg";
import grid4 from "../assets/img-4.jpg";
import grid5 from "../assets/img-5.jpg";
import grid6 from "../assets/img-6.jpg";
import grid7 from "../assets/img-7.jpg";
import grid8 from "../assets/img-8.jpg";
import grid9 from "../assets/img-9.jpg";

const CustomerFeedback: React.FC = () => {
  const galleryImages = [
    grid1,
    grid2,
    grid3,
    grid4,
    grid5,
    grid6,
    grid7,
    grid8,
    grid9,
  ];

  return (
    <section className="customer-feedback">
      <div className="customer-feedback-container">

        <div className="feedback-area">
          <h3 className="feedback-heading">
            What they say about us
          </h3>

          <div className="feedback-card">

            <div className="customer-avatar">
              <img
                src={userAvatar}
                alt="Regina Miles"
              />
            </div>

            <div className="feedback-rating">
              <span className="star active">★</span>
              <span className="star active">★</span>
              <span className="star active">★</span>
              <span className="star active">★</span>
              <span className="star">★</span>
            </div>

            <p className="feedback-text">
              Slate helps you see how many more days you need to work
              to reach your financial goal.
            </p>

            <div className="customer-details">
              <span className="customer-name">
                Regina Miles
              </span>

              <span className="customer-role">
                Designer
              </span>
            </div>

          </div>
        </div>

        <div className="customer-gallery">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-image"
            >
              <img
                src={image}
                alt={`Customer gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerFeedback;