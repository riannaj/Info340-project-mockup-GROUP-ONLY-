import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    id: 1,
    image: "/img/communtiy_content.avif",
    text: "Today I reached my fitness goal! Feeling good!",
  },
  {
    id: 2,
    image: null,
    text: "Image/post placeholder",
  },
];

const Post = ({ post }) => (
  <div className="post">
    {post.image ? (
      <div className="post-image">
        <img src={post.image} alt="User post" />
      </div>
    ) : (
      <div className="post-image">{post.text}</div>
    )}
    {post.image && <p className="post-text">{post.text}</p>}
    <div className="post-actions">
      <button type="button" className="action-item">Like</button>
      <button type="button" className="action-item">Comment</button>
      <button type="button" className="action-item">Share</button>
    </div>
  </div>
);

const Community = () => {
  return (
    <div className="mobile-container app-page community-page">
      <header className="header">
        <h1>Habit Hive</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <h2>Community</h2>

          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
