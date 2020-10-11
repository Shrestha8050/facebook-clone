import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from '../../Provider/StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageURI, setImageURI] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURI,
    });
    setImageURI('');
    setInput('');
  };
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form action=''>
          <input
            type='text'
            value={input}
            className='messageSender__input'
            placeholder={`whats on your mind, ${user.displayName}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder='Image Url(Optional)'
            value={imageURI}
            onChange={(e) => setImageURI(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live View</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'orange' }} />
          <h3>Photo/Videos</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
