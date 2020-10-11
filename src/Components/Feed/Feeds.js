import React, { useState, useEffect } from 'react';
import './feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../../firebase';

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  console.log(posts);
  return (
    <div className='feeds'>
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          img={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
};

export default Feeds;
