import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ProductItem from "../components/ProductItem/ProductItem";
import ServicesSection from "../components/services/serviceHighlights";
import FeaturedPosts from "../components/FeaturedPosts/BlogHighlights";
import Testimonials from "../components/Testimonials/CustomerFeedback";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/footer/footer";

import { useGetBestsellerProductsQuery } from "../features/api/productsApi";

import "../styles/Home.css";

import hero1 from "../assets/media bg-cover(1).png";
import hero2 from "../assets/media bg-cover.png";
import hero3 from "../assets/media bg-cover(2).png";
import hero4 from "../assets/media bg-cover(3).png";

const Home: React.FC = () => {
  const [displayLimit, setDisplayLimit] = useState(10);

  const { data, error, isLoading, isFetching } =
    useGetBestsellerProductsQuery({
      limit: displayLimit,
      skip: 0,
    });

  const products = data?.products ?? [];

  const heroItems = [
    {
      image: hero1,
      className: "hero-item-1",
      title: "FURNITURE",
    },
    {
      image: hero2,
      className: "hero-item-2",
      title: "FURNITURE",
    },
    {
      image: hero3,
      className: "hero-item-3",
      title: "FURNITURE",
    },
    {
      image: hero4,
      className: "hero-item-4",
      title: "FURNITURE",
    },
  ];

  const handleLoadMore = () => {
    setDisplayLimit((currentLimit) => currentLimit + 10);
  };

  return (
    <div>
      <Navbar />

      <main className="home-main">
        {/* Hero section */}
        <section className="hero-grid-container">
          {heroItems.map((item) => (
            <div
              key={item.className}
              className={`hero-item ${item.className}`}
            >
              <img src={item.image} alt={item.title} />

              <div className="hero-text">
                <span>5 Items</span>
                <h4>{item.title}</h4>
                <p>Read More</p>
              </div>
            </div>
          ))}
        </section>

        {/* Bestseller products */}
        <section className="home-container">
          <div className="home-hero-section">
            <h4 className="home-hero-subtitle">
              Featured Products
            </h4>

            <h1 className="home-hero-title">
              BESTSELLER PRODUCTS
            </h1>

            <p className="home-hero-desc">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {isLoading && (
            <p className="loading-text">
              Loading bestseller products...
            </p>
          )}

          {error && (
            <p className="error-text">
              Failed to load products from API.
            </p>
          )}

          <div className="home-product-grid">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="load-more-container">
            <button
              type="button"
              className="load-more-btn"
              onClick={handleLoadMore}
              disabled={isFetching}
            >
              {isFetching
                ? "LOADING..."
                : "LOAD MORE PRODUCTS"}
            </button>
          </div>
        </section>

        <ServicesSection />

        <FeaturedPosts />

        <Testimonials />

        <CallToAction />

        <Footer />
      </main>
    </div>
  );
};

export default Home;