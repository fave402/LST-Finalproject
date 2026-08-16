import React from "react";
import "../FeaturedPosts/BlogHighlights.css";

import post1 from "../assets/img1.jpg";
import post2 from "../assets/img2.jpg";
import post3 from "../assets/img3.jpg";
import clockIcon from "../assets/clockicon.png";
import commentIcon from "../assets/comment.png";
import arrowIcon from "../assets/arrow-right.png";

const BlogHighlights: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: post1,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 2,
      image: post2,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      id: 3,
      image: post3,
      tag: "NEW",
      categories: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="blog-highlights">
      <div className="blog-highlights-container">

        <div className="blog-heading">
          <span className="blog-label">Practice Advice</span>

          <h2 className="blog-heading-title">
            Featured Posts
          </h2>

          <p className="blog-heading-text">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="blog-posts">
          {posts.map((post) => (
            <article className="blog-post" key={post.id}>

              <div className="blog-post-image">
                <img
                  src={post.image}
                  alt={post.title}
                />

                <span className="blog-post-tag">
                  {post.tag}
                </span>
              </div>

              <div className="blog-post-content">

                <div className="blog-post-categories">
                  {post.categories.map((category) => (
                    <span key={category}>
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="blog-post-title">
                  {post.title}
                </h3>

                <p className="blog-post-description">
                  {post.description}
                </p>

                <div className="blog-post-details">

                  <div className="blog-post-detail">
                    <img
                      src={clockIcon}
                      alt="Date"
                    />
                    <span>{post.date}</span>
                  </div>

                  <div className="blog-post-detail">
                    <img
                      src={commentIcon}
                      alt="Comments"
                    />
                    <span>{post.comments}</span>
                  </div>

                </div>

                <a
                  href="#learn-more"
                  className="blog-post-link"
                >
                  Learn More
                  <img
                    src={arrowIcon}
                    alt=""
                  />
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogHighlights;