import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";

import "../navbar/Navbar.css";

import phoneIcon from "../../assets/Images/phoneicon.png";
import emailIcon from "../../assets/Images/emailicon.png";
import userIcon from "../../assets/Images/usericon.png";
import searchIcon from "../../assets/Images/searchicon.png";
import cartIcon from "../../assets/Images/carticon.png";
import heartIcon from "../../assets/Images/hearticon.png";
import dropdownIcon from "../../assets/Images/dropdown.png";

import mobileSearchIcon from "../../assets/Images/icn search .icn-xs.png";
import mobileCartIcon from "../../assets/Images/icn shopping-cart.icn-xs.png";
import hamburgerIcon from "../../assets/Images/icn menu.icn-xs.png";

import instagramIcon from "../../assets/Images/insta.png";
import youtubeIcon from "../../assets/Images/Youtube.png";
import facebookIcon from "../../assets/Images/FB.png";
import twitterIcon from "../../assets/Images/twitter.png";

interface ToastItem {
  id: number | string;
  title: string;
  price: number;
  thumbnail?: string;
}

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [recentItem, setRecentItem] = useState<ToastItem | null>(null);

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart?.items ?? [],
  );

  const wishlistItems = useAppSelector(
    (state) => state.wishlist?.items ?? [],
  );

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const wishlistQuantity = wishlistItems.length;

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const changeCartVisibility = () => {
    setShowCart((visible) => !visible);
    setShowWishlist(false);
  };

  const changeWishlistVisibility = () => {
    setShowWishlist((visible) => !visible);
    setShowCart(false);
  };

  // Show a message when something is added to the cart
  useEffect(() => {
    const displayCartAlert = (event: Event) => {
      const cartEvent = event as CustomEvent<ToastItem>;

      if (cartEvent.detail) {
        setRecentItem(cartEvent.detail);
      }
    };

    window.addEventListener("cart-item-added", displayCartAlert);

    return () => {
      window.removeEventListener(
        "cart-item-added",
        displayCartAlert,
      );
    };
  }, []);

  // Hide the message after 3 seconds
  useEffect(() => {
    if (!recentItem) return;

    const timer = setTimeout(() => {
      setRecentItem(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [recentItem]);

  return (
    <header className="header-container">
      {/* Cart notification */}
      {recentItem && (
        <div className="toast-notification-card">
          <div className="toast-header">
            <span>Item added to your cart</span>

            <button
              type="button"
              className="toast-close-btn"
              onClick={() => setRecentItem(null)}
              aria-label="Close notification"
            >
              &times;
            </button>
          </div>

          <div className="toast-body">
            {recentItem.thumbnail && (
              <img
                src={recentItem.thumbnail}
                alt={recentItem.title}
                className="toast-thumb"
              />
            )}

            <div className="toast-info">
              <p className="toast-title">{recentItem.title}</p>
              <p className="toast-price">
                ${recentItem.price}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <img
                src={phoneIcon}
                alt="Phone"
                className="top-bar-icon"
              />
              (225) 555-0118
            </span>

            <span className="top-bar-item">
              <img
                src={emailIcon}
                alt="Email"
                className="top-bar-icon"
              />
              michelle.rivera@example.com
            </span>
          </div>

          <div className="top-bar-center">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>

          <div className="top-bar-right">
            <span>Follow Us :</span>

            <span className="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            Bandage
          </Link>

          {/* Desktop menu */}
          <ul className="desktop-nav-links desktop-only">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop" className="nav-shop-link">
                Shop
                <img
                  src={dropdownIcon}
                  alt=""
                  className="dropdown-arrow"
                />
              </Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/pages">Pages</Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <ul
            className={`mobile-nav-links ${
              menuVisible ? "active" : ""
            }`}
          >
            <li>
              <Link to="/" onClick={hideMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/product" onClick={hideMenu}>
                Product
              </Link>
            </li>

            <li>
              <Link to="/pricing" onClick={hideMenu}>
                Pricing
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={hideMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            {/* Login */}
            <Link
              to="/login"
              className="navbar-login desktop-only"
            >
              <img
                src={userIcon}
                alt="User"
                className="nav-icon-img user-icon-spacing"
              />
              Login / Register
            </Link>

            {/* Search */}
            <button
              type="button"
              className="navbar-icon-btn desktop-only"
              title="Search"
            >
              <img
                src={searchIcon}
                alt="Search"
                className="nav-icon-img"
              />
            </button>

            {/* Cart */}
            <div className="cart-dropdown-wrapper">
              <button
                type="button"
                className="navbar-action-item desktop-only cart-toggle-btn"
                onClick={changeCartVisibility}
                aria-label="Open cart"
              >
                <img
                  src={cartIcon}
                  alt="Cart"
                  className="nav-icon-img"
                />
                <span>{cartQuantity}</span>
              </button>

              {showCart && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Shopping Cart</h4>

                    <button
                      type="button"
                      className="close-dropdown-btn"
                      onClick={() => setShowCart(false)}
                      aria-label="Close cart"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="cart-dropdown-items-list">
                    {cartItems.length === 0 ? (
                      <p className="empty-cart-text">
                        No items in your cart yet
                      </p>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="cart-dropdown-item"
                        >
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="dropdown-item-thumb"
                            />
                          )}

                          <div className="dropdown-item-info">
                            <p className="dropdown-item-title">
                              {item.title}
                            </p>

                            <p className="dropdown-item-pricing">
                              ${item.price}
                            </p>

                            <div className="cart-quantity-controls">
                              <button
                                type="button"
                                className="qty-btn"
                                onClick={() =>
                                  dispatch(
                                    decrementQuantity(item.id),
                                  )
                                }
                              >
                                -
                              </button>

                              <span>{item.quantity}</span>

                              <button
                                type="button"
                                className="qty-btn"
                                onClick={() =>
                                  dispatch(
                                    incrementQuantity(item.id),
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="dropdown-remove-btn"
                            onClick={() =>
                              dispatch(removeFromCart(item.id))
                            }
                            title="Remove item"
                          >
                            🗑️
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="cart-dropdown-footer">
                    <div className="cart-total-row">
                      <span className="cart-total-label">
                        Total
                      </span>

                      <span className="cart-total-amount">
                        ${cartSubtotal.toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="checkout-btn"
                      onClick={() =>
                        alert("Proceeding to checkout...")
                      }
                    >
                      Continue to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="cart-dropdown-wrapper desktop-only">
              <button
                type="button"
                className="navbar-action-item cart-toggle-btn"
                onClick={changeWishlistVisibility}
                title="Wishlist"
              >
                <img
                  src={heartIcon}
                  alt="Wishlist"
                  className="nav-icon-img"
                />
                <span>{wishlistQuantity}</span>
              </button>

              {showWishlist && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Saved Items</h4>

                    <button
                      type="button"
                      className="close-dropdown-btn"
                      onClick={() => setShowWishlist(false)}
                      aria-label="Close wishlist"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="cart-dropdown-items-list">
                    {wishlistItems.length === 0 ? (
                      <p className="empty-cart-text">
                        No saved items yet
                      </p>
                    ) : (
                      wishlistItems.map((item) => (
                        <div
                          key={item.id}
                          className="cart-dropdown-item"
                        >
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="dropdown-item-thumb"
                            />
                          )}

                          <div className="dropdown-item-info">
                            <p className="dropdown-item-title">
                              {item.title}
                            </p>

                            <p className="dropdown-item-pricing">
                              ${item.price}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="dropdown-remove-btn"
                            onClick={() =>
                              dispatch(
                                removeFromWishlist(item.id),
                              )
                            }
                            title="Remove from wishlist"
                          >
                            🗑️
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile search */}
            <button
              type="button"
              className="navbar-icon-btn mobile-only"
              title="Search"
            >
              <img
                src={mobileSearchIcon}
                alt="Search"
                className="nav-icon-img"
              />
            </button>

            {/* Mobile cart */}
            <div className="cart-dropdown-wrapper mobile-only">
              <button
                type="button"
                className="navbar-action-item cart-toggle-btn"
                onClick={changeCartVisibility}
                aria-label="Open cart"
              >
                <img
                  src={mobileCartIcon}
                  alt="Cart"
                  className="nav-icon-img"
                />
                <span>{cartQuantity}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="hamburger-btn mobile-only"
              onClick={() =>
                setMenuVisible((visible) => !visible)
              }
              aria-label="Toggle navigation menu"
              aria-expanded={menuVisible}
            >
              <img
                src={hamburgerIcon}
                alt="Menu"
                className="nav-icon-img"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;