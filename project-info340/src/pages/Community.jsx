import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initialPosts = [
  {
    id: 1,
    image: "/img/communtiy_content.avif",
    text: "Today I reached my fitness goal! Feeling good!",
    likes: 5,
    comments: [
      { id: 1, text: "Great job! Keep it up! 🎉" },
      { id: 2, text: "You're inspiring me!" }
    ],
  },
  {
    id: 2,
    image: null,
    text: "Just completed my 30-day reading streak!",
    likes: 3,
    comments: [],
  },
];

const Post = ({ post, onLike, onAddComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(post.id, commentText);
      setCommentText("");
    }
  };

  return (
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
        <button 
          type="button" 
          className="action-item"
          onClick={() => onLike(post.id)}
        >
          Like ({post.likes})
        </button>
        <button 
          type="button" 
          className="action-item"
          onClick={() => setShowComments(!showComments)}
        >
          Comment ({post.comments.length})
        </button>
        <button type="button" className="action-item">Share</button>
      </div>
      
      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="comment-input"
            />
            <button type="submit" className="btn btn-primary btn-small">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (postId, commentText) => {
    const newComment = {
      id: Date.now(),
      text: commentText
    };
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim()) {
      const newPost = {
        id: Date.now(),
        image: null,
        text: newPostText,
        likes: 0,
        comments: []
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");
      setShowPostForm(false);
    }
  };

  return (
    <div className="mobile-container app-page community-page">
      <header className="header">
        <h1>Habit Hive</h1>
      </header>

      <Navbar />

      <main className="content">
        <div className="section">
          <div className="habits-header">
            <h2>Community</h2>
            <button 
              className="btn btn-primary btn-small"
              onClick={() => setShowPostForm(!showPostForm)}
            >
              + New Post
            </button>
          </div>

          {showPostForm && (
            <div className="new-post-form">
              <form onSubmit={handleNewPostSubmit}>
                <textarea
                  placeholder="What's on your mind? Share your progress!"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  rows="3"
                  className="post-textarea"
                  required
                />
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-small"
                    onClick={() => {
                      setShowPostForm(false);
                      setNewPostText("");
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-small">
                    Post
                  </button>
                </div>
              </form>
            </div>
          )}

          {posts.map((post) => (
            <Post 
              key={post.id} 
              post={post} 
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
