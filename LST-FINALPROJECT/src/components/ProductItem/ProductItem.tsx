import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";
import "../ProductItem/ProductItem.css";

import heartIcon from "../assets/Images/hearticon.png";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector(
    (state) => state.wishlist?.items || [],
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id,
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    window.dispatchEvent(
      new CustomEvent("cart-item-added", {
        detail: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        },
      }),
    );
  };

  const handleWishlistToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(toggleWishlist(product));
  };

  const originalPrice = (product.price * 2.5).toFixed(2);
  const discountedPrice = product.price.toFixed(2);

  const productCategory = product.category
    ? product.category.charAt(0).toUpperCase() +
      product.category.slice(1)
    : "Collection";

  return (
    <div className="product-item">
      <Link
        to={`/product/${product.id}`}
        className="product-item-image-container"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-item-image"
        />

        <button
          type="button"
          className={`product-item-wishlist-btn desktop-only ${
            isWishlisted ? "active" : ""
          }`}
          onClick={handleWishlistToggle}
          title={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <img
            src={heartIcon}
            alt="Wishlist"
            className="wishlist-icon-img"
          />
        </button>
      </Link>

      <div className="product-item-content">
        <Link
          to={`/product/${product.id}`}
          className="product-item-title-link"
        >
          <h3 className="product-item-title">
            {product.title}
          </h3>
        </Link>

        <p className="product-item-category">
          {productCategory}
        </p>

        <div className="product-item-price-container">
          <span className="product-item-old-price">
            ${originalPrice}
          </span>

          <span className="product-item-price">
            ${discountedPrice}
          </span>
        </div>

        <button
          className="product-item-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;